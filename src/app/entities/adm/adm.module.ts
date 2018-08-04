import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModelModule } from './component-model/component-model.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentModelModule
  ],
  exports: [
    ComponentModelModule
  ]
})
export class AdmModule { }
