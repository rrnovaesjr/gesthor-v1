import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModelComponent } from './component-model.component';
import { ComponentModelService } from './component-model.service'
import { ComponentModelRoutingModule } from './component-model-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModelRoutingModule
  ],
  declarations: [
    ComponentModelComponent
  ],
  providers: [
    ComponentModelService
  ]
})
export class ComponentModelModule { }
