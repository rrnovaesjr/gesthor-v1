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
import { BehaviorSubject, Observable, ObservableInput } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../../desktop-app/model/user/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Role } from '../../../desktop-app/model/role/role.model';

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
   * Key that references the current session's hash.
   */
  private static readonly AUTH0_DECODED_HASH_STORAGE_KEY: string = 'hash';

  /**
   * Key that references the current user's id.
   */
  private static readonly AUTH0_USER_PROFILE_SUB: string = 'profile';

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
    rememberLastLogin: true,
    allowedConnections: ['google-oauth2', 'facebook', 'twitter'],
    auth: {
      audience: environment.auth.audience,
      redirect: true,
      redirectUrl: environment.auth.redirect,
      responseType: 'token',
      params: this.authParams
    },
    language: 'pt-br',
    languageDictionary: {
      title: 'Gesthor'
    },
    theme: {
      logo: '../../assets/img/logo.png',
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
    private translateService: TranslateService,
  ) {
    this._checkSession();
  }

  /**
   * Open centralized login.
   */
  public login(): void {
    this.auth0Lock.show();
  }

  /**
   * Handles the login callback.
   * 
   * This will set the current session.
   */
  public handleLoginCallback(): void {
    this.auth0.parseHash((err: Auth0Error, authResult: Auth0DecodedHash) => {
      if (err) {
        this._handleError(err);
      }
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this._getUserInfo(authResult);
      }
      this.router.navigate(['/']);
    });
  }

  /**
   * Gets an access token based on the session.
   * 
   * If the user's session is still active, then the token is received once again.
   */
  private _checkSession(): void {
    const hash: Auth0DecodedHash = JSON.parse(localStorage.getItem(AuthService.AUTH0_DECODED_HASH_STORAGE_KEY));
    const userId: string = JSON.parse(localStorage.getItem(AuthService.AUTH0_USER_PROFILE_SUB));
    const expiresAt: Date = JSON.parse(localStorage.getItem(AuthService.EXPIRES_AT_STORAGE_KEY));
    if (hash && userId && expiresAt) {
      this._setSession(hash, userId);
    }
  }

  /**
   * Get the user's information from the authorization result.
   * 
   * @param authResult A reference to the authorization result.
   */
  private _getUserInfo(authResult: Auth0DecodedHash): void {
    this.auth0.client.userInfo(authResult.accessToken, (err: Auth0Error, profile: Auth0UserProfile) => {
      if (err) {
        this._handleError(err);
      }
      if (profile) {
        this._setSession(authResult, profile.sub);
      }
    });
  }

  /**
   * Sets the current session based on the Auth0Profile and the decoded hash.
   * 
   * @param authResult Decoded hash.
   * @param profileId User's profile id.
   */
  private _setSession(authResult: Auth0DecodedHash, profileId: string): void {
    this.httpClient.get<Auth0UserProfile>(`${this.userApi}/${profileId}`, {
      headers: new HttpHeaders().set('authorization', `${this.tokenType} ${authResult.accessToken}`)
    }).pipe(catchError(this._handleError)).subscribe((userInstance: Auth0UserProfile) => {
      const expTime: number = authResult.expiresIn * 1000 + Date.now();
      localStorage.setItem(AuthService.EXPIRES_AT_STORAGE_KEY, JSON.stringify(expTime));
      localStorage.setItem(AuthService.AUTH0_DECODED_HASH_STORAGE_KEY, JSON.stringify(authResult));
      localStorage.setItem(AuthService.AUTH0_USER_PROFILE_SUB, JSON.stringify(profileId));
      this.auth0DecodedHash = authResult;
      this.userInstance = new User(userInstance.sub, userInstance.name, userInstance.nickname, userInstance.picture,
        userInstance.user_id, userInstance.identities, userInstance.clientID, userInstance.created_at,
        userInstance.updated_at, userInstance.locale, userInstance.app_metadata, userInstance.user_metadata,
        userInstance.username, userInstance.given_name, userInstance.family_name, userInstance.email, userInstance.email_verified,
        userInstance.gender
      );
      if (this.userInstance.app_metadata.language) {
        this.translateService.setDefaultLang(this.userInstance.app_metadata.language);
      }
      this._userInstanceSubject.next(this.userInstance);
      this.authenticated = true;
    });
  }

  /**
   * Removes current session data.
   */
  public logout(): void {
    localStorage.removeItem(AuthService.EXPIRES_AT_STORAGE_KEY);
    localStorage.removeItem(AuthService.AUTH0_DECODED_HASH_STORAGE_KEY);
    localStorage.removeItem(AuthService.AUTH0_USER_PROFILE_SUB);
    this.userInstance = undefined;
    this.authenticated = false;
    this._userInstanceSubject.next(this.userInstance);
    this.router.navigate(['/']);
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
   * Gets an array of strings corresponded to the user current roles.
   * 
   * If there is no active user, then returns ROLE_VISITOR as default.
   */
  get userRoles(): string[] {
    return this.userInstance ? this.userInstance.app_metadata.userRoles : [Role.ROLE_VISITOR.persistentValue];
  }

  /**
   * Checks if current user has a matching role in `roles` to access `route`.
   * 
   * @param roles Roles to be checked.
   * @param route Desired route.
   */
  public hasPermission(roles: string[], route: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${environment.apiUrl}/api/components/permission`, {
      roles: roles, route: route
    }, { headers: new HttpHeaders().set('authorization', `${this.tokenType} ${this.getAccessToken}`) });
  }

  /**
   * Handles generic errors throughout the authorization service.
   * 
   * @param err An error instance.
   */
  private _handleError(err: Error | Auth0Error, caught?: Observable<Auth0UserProfile>): ObservableInput<{}> {
    this.logout();
    this.authenticated = false;
    return caught;
  }

}