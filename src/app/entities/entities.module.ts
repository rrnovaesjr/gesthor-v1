import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmModule } from './adm/adm.module';

@NgModule({
  imports: [
    CommonModule,
    AdmModule
  ],
  exports: [
    AdmModule
  ]
})
export class EntitiesModule { }
