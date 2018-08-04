import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../../../desktop-app/model/user/user.model';
import { SpinnerVisibilityService } from 'ng-http-loader';

/** 
 * A Guard for managing authorized routes.
 * 
 * @author rrnovaesjr
*/
@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * Public constructor.
   * 
   * @param authService Injects `AuthService`.
   * @param router Injects `Router`.
   */
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  /**
   * Verify if a user is authorized and if it can activate the desired route.
   * 
   * @param next Next route's snapshot.
   * @param state Current route's state. 
   */
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated) {
      return this.authService.hasPermission(this.authService.userRoles, state.url.substring(1)).pipe(
        tap((result: boolean) => result),
        catchError(() => this.router.navigate(['/'])));
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
