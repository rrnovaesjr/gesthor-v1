import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComponentModelComponent } from './component-model.component';
import { AuthGuard } from '../../../auth/auth.guard';
import { ComponentModelResolverService } from './component-model-resolver.service';

const componentModelRoutes: Routes = [
  {
    path: 'adm/components',
    component: ComponentModelComponent,
    canActivate: [AuthGuard],
    resolve: {
      data: ComponentModelResolverService
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentModelRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ComponentModelResolverService
  ]
})
export class ComponentModelRoutingModule { }
