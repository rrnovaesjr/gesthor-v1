import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { AuthCallbackComponent } from './auth-callback.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [
    AuthService
  ],
  declarations: [
    AuthCallbackComponent
  ]
})
export class AuthModule { }
