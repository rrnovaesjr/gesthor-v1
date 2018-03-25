import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { Routes, RouterModule } from '@angular/router';

const navbarRoutes: Routes = [
    {
        path: '',
        outlet: 'navbar',
        component: NavbarComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(navbarRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class NavbarRoutingModule { }