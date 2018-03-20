import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthModule } from '../auth';
import { 
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { MemberModule } from '../member';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MemberModule,
    RouterModule
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
