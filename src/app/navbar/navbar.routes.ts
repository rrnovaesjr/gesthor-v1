import { NavbarComponent } from './navbar.component';
import { Routes } from '@angular/router';

export const navbarRoutes: Routes = [
    {
        path: '',
        outlet: 'navbar',
        component: NavbarComponent
    }
]       