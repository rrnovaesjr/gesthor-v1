import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule
} from '@angular/material';
import { AuthModule } from '../auth';

@NgModule({
  imports: [
    AuthModule,
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ],
  declarations: [
    MemberComponent
  ],
  exports: [
    MemberComponent
  ]
})
export class MemberModule { }
