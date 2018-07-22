import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MemberComponent } from './member.component';
import { SharedModule } from '../shared';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    HttpClientModule,
    AuthModule,
    ClickOutsideModule,
    SharedModule
  ],
  declarations: [
    MemberComponent
  ],
  exports: [
    MemberComponent
  ],
  providers: [
    UserService
  ]
})
export class MemberModule { }
