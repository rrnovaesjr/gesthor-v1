import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModelComponent } from './component-model.component';

const componentModelRoutes: Routes = [
  {
    path: 'adm/components',
    component: ComponentModelComponent
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
