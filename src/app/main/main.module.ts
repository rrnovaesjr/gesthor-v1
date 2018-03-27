import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { MemberModule } from '../member';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    MemberModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
