import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModelComponent } from './component-model.component';
import { AuthGuard } from '../../../auth/auth.guard';

const componentModelRoutes: Routes = [
  {
    path: 'adm/components',
    component: ComponentModelComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentModelRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentModelRoutingModule { }
