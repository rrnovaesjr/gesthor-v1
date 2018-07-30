import { Injectable } from '@angular/core';
import { AbstractSecuredService } from '../abstract/service/service.interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { ComponentModel } from '../../../desktop-app/model/component/component.model';
import { catchError } from 'rxjs/operators';
import { Role } from '../../../desktop-app/model/role/role.model';
import { ProgressAdvisorService } from '../progress-advisor';
import { SpinnerVisibilityService } from 'ng-http-loader';

/**
 * A service to control the navbar.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class NavbarService extends AbstractSecuredService {

  /**
   * A constant reference to the components API.
   */
  private readonly apiUrl: string = `${this.api}/api/components`

  /**
   * Creates a new navbar service.
   * 
   * @param httpClient Injects the http client.
   * @param ngSpinnerService Injects the spinner service.
   * @param authService Injects an instance of the authorization service.
   */
  constructor(
    httpClient: HttpClient,
    ngSpinnerService: SpinnerVisibilityService,
    authService: AuthService
  ) {
    super(httpClient, ngSpinnerService, authService);
  }

  /**
   * Loads the application menu as a tree-model.
   */
  public loadMenu(): Observable<ComponentModel[]> {
    return this.httpClient.post<ComponentModel[]>(
      this.apiUrl,
      this.userInstance ? this.userInstance.app_metadata.userRoles : [Role.ROLE_VISITOR.persistentValue],
      { headers: this.createHttpHeaders().set('sort', ['order','asc']), params: this.createSearchParams() }
    ).pipe(catchError(super.handleError));
  }

}
