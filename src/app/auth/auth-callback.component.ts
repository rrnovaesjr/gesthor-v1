import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth-callback',
  template: '<mat-card>Carregando...</mat-card>'
})
export class AuthCallbackComponent implements OnInit {

  /**
   * Calls for authorization service.
   * 
   * @param authService Authorization service.
   */
  constructor(private authService: AuthService) { }

  /**
   * Handles the login callback as the decoded hash is sent by Auth0.
   * 
   * This component receives such hash and sends it to the specified method.
   */
  ngOnInit() {
    this.authService.handleLoginCallback();
  }

}
