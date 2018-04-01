import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { MemberModule } from '../member';
import { ProgressAdvisorModule } from '../progress-advisor';

@NgModule({
  imports: [
    MemberModule,
    ProgressAdvisorModule,
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
