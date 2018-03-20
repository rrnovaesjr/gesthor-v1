import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';

export const routes: Routes = [
    {
        path: 'callback',
        pathMatch: 'full',
        component: AuthCallbackComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }