import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User, UserInfo, AuthProvider, AuthCredential, GoogleAuthProvider } from '@firebase/auth-types'
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

/** 
 * Service that controls the user's authority throughout the app.
 * 
 * @author rrnovaesjr
*/
@Injectable()
export class AuthService {

  /**
   * Default session's expiration time.
   */
  public static readonly DEFAULT_EXPIRATION_TIME: number = 99999999;

  /**
   * A public stream to check user's state.
   */
  public userState: Observable<User>;

  /**
   * The app reference to the current logged user.
   */
  private user: User;

  /**
   * Checks if user is authenticated.
   */
  private authenticated: boolean;

  /**
   * User token's identifier.
   */
  private idToken: string;

  /**
   * The Google auth provider.
   */
  private googleProvider: firebase.auth.GoogleAuthProvider;

  /**
   * Constructor that injects the necessary services to the app.
   * 
   * @param afAuth Angular Firebase auth API.
   * @param router Router service.
   */
  public constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  /** 
   * Sign in when current session's still active.
  */
  public getAccessToken(): void {
    this.idToken = localStorage.getItem('id-token');
    const expirationTime: number = Number.parseInt(localStorage.getItem('expiration-date'));
    if(this.idToken && expirationTime) {
      const credential: firebase.auth.AuthCredential = firebase.auth.GoogleAuthProvider.credential(this.idToken);
      firebase.auth().signInWithCredential(credential).then(
        (result: any) => this.handleLogin(result),
        (error: any) => this.handleError(error)
      );
    }
  }

  /** 
   * Log in by Google auth provider.
  */
  public loginGoogle(): void {
    this.oAuthLoginByPopup(this.googleProvider).then((result: any) => this.handleLogin(result));
  }

  /**
   * Handles login results.
   * 
   * @param result Login result object.
   */
  private handleLogin(result): void {
    if(result.user && result.credential) {
      this.user = result.user;
      this.idToken = result.credential.idToken;
    }
    this.setSession();
    this.authenticated = true;
  }

  /**
   * Handle login errors.
   * 
   * @param error Login error object.
   */
  private handleError(error): void {

  }

  /**
   * Sets current user's session.
   */
  private setSession(): void {
    localStorage.setItem('id-token', this.idToken);
    localStorage.setItem('expiration-date', (Date.now() + AuthService.DEFAULT_EXPIRATION_TIME).toString());
  }

  /** 
   * Unsets the current user's session.
  */
  private unsetSession(): void {
    localStorage.removeItem('id-token');
    localStorage.removeItem('expiration-date');
  }

  /**
   * Log in the app using a specific provider. The authentication on the auth provider is made
   * into a popup.
   * 
   * @param provider Auth provider.
   */
  private oAuthLoginByPopup<T extends firebase.auth.AuthProvider>(provider: T): Promise<any> {
    return firebase.auth().signInWithPopup(provider);
  }

  /** 
   * Sign current user out.
   * 
   * @param callback An optional function to be executed when logout is completed.
  */
  public signOut(): Promise<any> {
    return this.afAuth.auth.signOut().then(() => this.unsetSession());
  }

  /** 
   * Get the user information.
  */
  public getUser(): Observable<UserInfo> {
    return this.afAuth.authState.map((user: User, index: number) => {
      this.user = user;
      return this.user;
    });
  }

  /**
   * Returns if an user is currently authenticated.
   */
  public get isAuthenticated(): boolean {
    const expiresAt: number = Number.parseInt(localStorage.getItem('expiration-date'));
    return (this.authenticated && Date.now() < expiresAt);
  }

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
