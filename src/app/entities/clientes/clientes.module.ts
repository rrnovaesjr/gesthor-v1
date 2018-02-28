import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { clientesRoutes } from './clientes.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(clientesRoutes, {})
  ],
  declarations: [
    ClientesComponent
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }
