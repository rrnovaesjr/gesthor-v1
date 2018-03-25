import { Component, OnInit } from '@angular/core';
import { AuthService } from '.';

@Component({
  selector: 'app-auth-callback',
  template: '<mat-card>Carregando...</mat-card>'
})
export class AuthCallbackComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleLoginCallback();
  }

}
