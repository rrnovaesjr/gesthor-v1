import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    NavbarRoutingModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
