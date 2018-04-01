import { Injectable } from '@angular/core';
import { 
  WebAuth, 
  Auth0UserProfile, 
  Auth0DecodedHash, 
  Auth0Callback, 
  Auth0Error 
} from 'auth0-js';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressAdvisorService } from '../progress-advisor/progress-advisor.service';

/**
 * An Auth0 service interface.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class AuthService {


  /**
   * A private reference to the Auth0 web authority.
   */
  private readonly auth0: WebAuth = new WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });

  /**
   * A private reference to the Auth0 user profile.
   */
  private userProfile: Auth0UserProfile;

  /**
   * A behavior subject for the user profile.
   */
  private _userProfile: BehaviorSubject<Auth0UserProfile> = new BehaviorSubject(this.userProfile);

  /**
   * Creates a stream for observing into user profile's changes.
   */
  public userProfile$: Observable<Auth0UserProfile> = this._userProfile.asObservable();

  /**
   * A private reference to the access token.
   */
  private accessToken: string;

  /**
   * A boolean flag that indicates if an user is authenticated.
   */
  private authenticated: boolean;

  /**
   * Builds the service based on the current session settings.
   * 
   * @param router A router reference.
   */
  constructor(private router: Router, private progressAdvisorService: ProgressAdvisorService) {
    this.getAccessToken();
  }

  /**
   * Open centralized login.
   */
  public login(): void {
    this.progressAdvisorService.announceConfig({show: true});
    this.auth0.authorize();
  }

  /**
   * Handles the login callback.
   */
  public handleLoginCallback(): void {
    this.auth0.parseHash((err: Auth0Error, authResult: Auth0DecodedHash) => {
      if(authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      }
      this.router.navigate(['/']);
      this.progressAdvisorService.announceConfig({show: false});
    });
  }

  /**
   * Gets an access token based on the session.
   */
  public getAccessToken(): void {
    this.auth0.checkSession({}, (err: Auth0Error, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      } 
      else if(err) {
        this.logout();
        this.authenticated = false;
      }
    }); 
  }

  /**
   * Get the user's information from the authorization result.
   * 
   * @param authResult A reference to the authorization result.
   */
  public getUserInfo(authResult: Auth0DecodedHash): void {
    this.auth0.client.userInfo(authResult.accessToken, (err: Auth0Error, profile: Auth0UserProfile) => {
      if(profile) {
        this._setSession(authResult, profile);
      }
    });
  }

  /**
   * Sets the current session based on the Auth0Profile and the decoded hash.
   * 
   * @param authResult Decoded hash.
   * @param profile User's profile.
   */
  private _setSession(authResult: Auth0DecodedHash, profile: Auth0UserProfile): void {
    const expTime: number = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this._userProfile.next(this.userProfile);
    this.authenticated = true;
  }

  /**
   * Removes current session data.
   */
  public logout(): void {
    localStorage.removeItem('expires_at');
    localStorage.removeItem('id_token');
    localStorage.removeItem('nonce');
    this.userProfile = undefined;
    this._userProfile.next(this.userProfile);
    this.accessToken = undefined;
    this.authenticated = false;
  }

  /**
   * Checks if current user is authenticated.
   */
  get isAuthenticated(): boolean {
    const expiresAt: number = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt && this.authenticated;
  }

}