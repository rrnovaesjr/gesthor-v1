import { Injectable } from '@angular/core';
import {
  WebAuth,
  Auth0UserProfile,
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressAdvisorService } from '../progress-advisor/progress-advisor.service';
import { HttpClient } from '@angular/common/http';

/**
 * An Auth0 service interface.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class AuthService {

  /**
   * Key that references the current session's expiration time on the local storage.
   */
  public static readonly EXPIRES_AT_STORAGE_KEY: string = 'expires_at';

  /**
   * An auth parameters object that sets google login to be selectable.
   */
  private readonly authParams: any = {
    scope: environment.auth.scope,
    prompt: 'select_account'
  };

  /**
   * Constant reference to the auth0 lock instance.
   */
  private readonly auth0Lock = new Auth0Lock(environment.auth.clientID, environment.auth.domain, {
    rememberLastLogin: false,
    auth: {
      audience: environment.auth.audience,
      redirect: true,
      redirectUrl: environment.auth.redirect,
      responseType: 'token',
      params: this.authParams
    }
  });

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
   * A boolean flag that indicates if an user is authenticated.
   */
  private authenticated: boolean;

  /**
   * The user's decoded information.
   */
  private auth0DecodedHash: Auth0DecodedHash;

  /**
   * Builds the service based on the current session settings.
   * 
   * @param router A router reference.
   */
  constructor(private router: Router,
    private progressAdvisorService: ProgressAdvisorService,
    private httpClient: HttpClient
  ) {
    this._checkSession();
  }

  /**
   * Open centralized login.
   */
  public login(): void {
    this.progressAdvisorService.announceConfig({ show: true });
    this.auth0Lock.show();
  }

  /**
   * Handles the login callback.
   */
  public handleLoginCallback(): void {
    this.auth0.parseHash((err: Auth0Error, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this._getUserInfo(authResult);
      }
      this.router.navigate(['/']);
      this.progressAdvisorService.announceConfig({ show: false });
    });
  }

  /**
   * Gets an access token based on the session.
   */
  private _checkSession(): void {
    this.auth0.checkSession({}, (err: Auth0Error, authResult: Auth0DecodedHash) => {
      if (authResult && authResult.accessToken) {
        this._getUserInfo(authResult);
      }
      else if (err) {
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
  private _getUserInfo(authResult: Auth0DecodedHash): void {
    this.auth0.client.userInfo(authResult.accessToken, (err: Auth0Error, profile: Auth0UserProfile) => {
      if (profile) {
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
    localStorage.setItem(AuthService.EXPIRES_AT_STORAGE_KEY, JSON.stringify(expTime));
    this.userProfile = profile;
    this.authenticated = true;
    this.auth0DecodedHash = authResult;
    this._userProfile.next(this.userProfile);
  }

  /**
   * Removes current session data.
   */
  public logout(): void {
    localStorage.removeItem(AuthService.EXPIRES_AT_STORAGE_KEY);
    this.userProfile = undefined;
    this._userProfile.next(this.userProfile);
    this.authenticated = false;
  }

  /**
   * Checks if current user is authenticated.
   */
  get isAuthenticated(): boolean {
    const expiresAt: number = JSON.parse(localStorage.getItem(AuthService.EXPIRES_AT_STORAGE_KEY));
    return Date.now() < expiresAt && this.authenticated;
  }

  /**
   * Gets the string corresponding to the access token.
   */
  get getManagementAPIToken(): string {
    return this.auth0DecodedHash.accessToken;
  }

  /**
   * Checks if current user has a matching `role` to access determinated route.
   * 
   * @param role Role to be checked.
   */
  public hasPermission(role: string): boolean {
    return (this.userProfile.app_metadata.userRole == role);
  }

}