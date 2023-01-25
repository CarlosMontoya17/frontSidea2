import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPasswordComponent } from './new-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewPasswordComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NewPasswordComponent]
})
export class NewPasswordModule { }
