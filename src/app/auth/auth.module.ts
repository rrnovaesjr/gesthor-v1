import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthCallbackComponent } from './auth-callback.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    AuthCallbackComponent
  ]
})
export class AuthModule { }
