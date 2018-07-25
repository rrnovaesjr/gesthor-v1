import { Injectable } from '@angular/core';
import {
  WebAuth,
  Auth0UserProfile,
  Auth0DecodedHash,
  Auth0Error,
} from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProgressAdvisorService } from '../progress-advisor/progress-advisor.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../desktop-app/model/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

/**
 * An Auth0 service interface.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class AuthService {

  /**
   * A constant reference to the API URL.
   */
  protected readonly userApi: string = `${environment.apiUrl}/api/users`;

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
  private readonly auth0Lock: Auth0LockStatic = new Auth0Lock(environment.auth.clientID, environment.auth.domain, {
    rememberLastLogin: false,
    auth: {
      audience: environment.auth.audience,
      redirect: true,
      redirectUrl: environment.auth.redirect,
      responseType: 'token',
      params: this.authParams
    },
    language: 'pt-br',
    theme: {
      logo: '',
      primaryColor: '#7986CB'
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
   * A constant that assigns the token type for authorized requests.
   */
  public readonly tokenType: string = 'Bearer';

  /**
   * A private reference to the Auth0 user profile.
   */
  private userInstance: User;

  /**
   * A behavior subject for the user profile.
   */
  private _userInstanceSubject: BehaviorSubject<User> = new BehaviorSubject(this.userInstance);

  /**
   * Creates a stream for observing into user profile's changes.
   */
  public userInstance$: Observable<User> = this._userInstanceSubject.asObservable();

  /**
   * A boolean flag that indicates if an user is authenticated.
   */
  private authenticated: boolean;

  /**
   * The user's decoded information.
   */
  private auth0DecodedHash: Auth0DecodedHash;

  /**
   * Creates a new instance of the Authorization Service.
   * 
   * @param router Injects an instance of the Router.
   * @param progressAdvisorService Injects an instance of the progress advisor service.
   * @param userService Injects an instance of the User Service.
   * @param httpClient Injects an instance of the HTTP Client.
   */
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private progressAdvisorService: ProgressAdvisorService,
    private translateService: TranslateService
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
    this.httpClient.get<Auth0UserProfile>(`${this.userApi}/${profile.sub}`, {
      headers: new HttpHeaders().set('authorization', `${this.tokenType} ${authResult.accessToken}`)
    }).subscribe((userInstance: User) => {
      const expTime: number = authResult.expiresIn * 1000 + Date.now();
      localStorage.setItem(AuthService.EXPIRES_AT_STORAGE_KEY, JSON.stringify(expTime));
      this.auth0DecodedHash = authResult;
      this.userInstance = userInstance;
      this._userInstanceSubject.next(this.userInstance);
      this.authenticated = true;
    });
  }

  /**
   * Removes current session data.
   */
  public logout(): void {
    localStorage.removeItem(AuthService.EXPIRES_AT_STORAGE_KEY);
    this.userInstance = undefined;
    this._userInstanceSubject.next(this.userInstance);
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
  get getAccessToken(): string {
    return this.auth0DecodedHash.accessToken;
  }

  /**
   * Checks if current user has a matching `role` to access determinated route.
   * 
   * @param role Role to be checked.
   */
  public hasPermission(role: string): boolean {
    for (let userRole of this.userInstance.app_metadata.userRoles) {
      if (userRole === role) {
        return true;
      }
    }
    return false;
  }

}