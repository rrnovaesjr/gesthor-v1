import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

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
  public constructor(private authService: AuthService, private router: Router) {

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
    if(this.authService.isAuthenticated) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
