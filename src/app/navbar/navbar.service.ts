import { Injectable } from '@angular/core';
import { AbstractSecuredService } from '../abstract/service/service.interface';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Auth0UserProfile } from 'auth0-js';

/**
 * A service to control the navbar.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class NavbarService extends AbstractSecuredService {

  /**
   * Creates a new navbar service.
   * 
   * @param httpClient Injects the http client.
   * @param authService Injects an instance of the authorization service.
   */
  constructor(httpClient: HttpClient, authService: AuthService) { 
    super(httpClient, authService);
  }

  /**
   * Loads the application menu as a tree-model.
   */
  public loadMenu(): Observable<any[]> {

    return null;
  }

}
