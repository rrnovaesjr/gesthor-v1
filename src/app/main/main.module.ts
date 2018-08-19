import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared';
import { MemberModule } from '../member';
import { AuthModule } from '../auth/auth.module';
import { PageNotFoundComponent } from './not-found.component';
import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { EntitiesModule } from '../entities';

@NgModule({
  imports: [
    HttpClientModule,
    NgHttpLoaderModule,
    AuthModule,
    MemberModule,
    EntitiesModule,
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
