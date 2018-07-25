import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent, MenuItemComponent } from './navbar.component';
import { SharedModule } from '../shared';
import { NavbarService } from './navbar.service';

@NgModule({
  imports: [
    LayoutModule,
    SharedModule,
    NavbarRoutingModule
  ],
  declarations: [
    NavbarComponent,
    MenuItemComponent
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
