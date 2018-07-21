import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MemberComponent } from './member.component';
import { SharedModule } from '../shared';
import { UserService } from './user.service';

@NgModule({
  imports: [
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
