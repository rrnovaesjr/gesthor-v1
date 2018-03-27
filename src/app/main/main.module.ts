import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { MemberModule } from '../member';

@NgModule({
  imports: [
    MemberModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
