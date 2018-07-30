import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { MemberModule } from '../member';
import { ProgressAdvisorModule } from '../progress-advisor';
import { AuthModule } from '../auth/auth.module';
import { PageNotFoundComponent } from './not-found.component';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    HttpClientModule,
    NgHttpLoaderModule,
    AuthModule,
    MemberModule,
    ProgressAdvisorModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    PageNotFoundComponent
  ],
  exports: [
    MainComponent,
    PageNotFoundComponent
  ]
})
export class MainModule { }
