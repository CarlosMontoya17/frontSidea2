import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorsComponent } from './input-colors.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';



@NgModule({
  declarations: [
    InputColorsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule
  ]
})
export class InputColorsModule { }
