import { Injectable } from '@angular/core';
import { AbstractSecuredService } from '../abstract/service/service.interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { ComponentModel } from '../../../desktop-app/model/component/component.model';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { ComponentModelService } from '../entities/adm/component-model/component-model.service';

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
    authService: AuthService,
    private componentModelService: ComponentModelService
  ) {
    super(httpClient, ngSpinnerService, authService);
  }

  /**
   * Loads the application menu as a tree-model.
   */
  public loadMenu(): Observable<ComponentModel[]> {
    return this.componentModelService.findAll();
  }

}
