import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesModule } from './clientes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClientesModule
  ],
  declarations: []
})
export class EntitiesModule { }
