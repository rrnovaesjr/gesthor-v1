import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { MemberComponent } from './member.component';
import { SharedModule } from '../shared';

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
  ]
})
export class MemberModule { }
