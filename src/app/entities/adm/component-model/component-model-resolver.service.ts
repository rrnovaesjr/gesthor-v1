import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ComponentModel } from '../../../../../desktop-app/model/component/component.model';
import { Observable } from 'rxjs';
import { ComponentModelService } from './component-model.service';
import { Constants } from '../../../../../desktop-app/service/util/constants';
import { AbstractSecuredService } from '../../../abstract/service/service.interface';
import { HttpClient } from '@angular/common/http';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { AuthService } from '../../../auth/auth.service';
import { take, map } from 'rxjs/operators';

/**
 * A service to resolve parameters.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class ComponentModelResolverService extends AbstractSecuredService
  implements Resolve<ComponentModel[]> {

  /**
   * Creates a new resolver.
   * 
   * @param httpClient Injects the HTTP Client service.
   * @param ngSpinnerService Injects the spinner service.
   * @param authService Injects the authorization service.
   * @param componentModelService Injects the component-model service.
   * @param router Injects the router.
   */
  constructor(
    httpClient: HttpClient,
    ngSpinnerService: SpinnerVisibilityService,
    authService: AuthService,
    private componentModelService: ComponentModelService,
    private router: Router
  ) {
    super(httpClient, ngSpinnerService, authService);
  }

  /**
   * Resolve a new query for components.
   * 
   * @param route The current activated route.
   * @param state The current router state.
   */
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ComponentModel[]> {
    const pageSize: number = Constants.defaultIfBlank<number>(+route.paramMap.get('size'), Constants.DEFAULT_QUERY_PARAMS.size);
    const pageIndex: number = Constants.defaultIfBlank<number>(+route.paramMap.get('page'), Constants.DEFAULT_QUERY_PARAMS.page);
    const sort: string = Constants.DEFAULT_QUERY_PARAMS.sort;
    return this.componentModelService.findAll(this.createHttpParams()
      .set('size', pageSize.toString()).set('page', pageIndex.toString()).set('sort', sort))
      .pipe(
        map((components: ComponentModel[]) => {
          console.log(components);
          if (components && components.length > 0) {
            return components;
          }
          return [];
        })
      );
  }

}
