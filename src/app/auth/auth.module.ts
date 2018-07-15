import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthCallbackComponent } from './auth-callback.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { UserService } from './user.service';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  declarations: [
    AuthCallbackComponent
  ]
})
export class AuthModule { }
