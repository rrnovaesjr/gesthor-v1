import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProgressAdvisorComponent } from './progress-advisor.component';
import { ProgressAdvisorService } from './progress-advisor.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProgressAdvisorComponent
  ],
  exports: [
    ProgressAdvisorComponent
  ],
  providers: [
    ProgressAdvisorService
  ]
})
export class ProgressAdvisorModule { }
