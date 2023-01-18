import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ActionButtonModule } from '../../layouts/action-button/action-button.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { SHARE_ENV } from 'worker_threads';
import { MatDialogModule } from '@angular/material/dialog';
import { NewPasswordModule } from '../new-password/new-password.module';




@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    ActionButtonModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    SharedModule,
    MatDialogModule,
    NewPasswordModule
  ]
})
export class EditUserModule { }
