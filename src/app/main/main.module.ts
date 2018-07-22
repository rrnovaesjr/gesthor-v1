import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { MemberModule } from '../member';
import { ProgressAdvisorModule } from '../progress-advisor';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  imports: [
    AuthModule,
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
