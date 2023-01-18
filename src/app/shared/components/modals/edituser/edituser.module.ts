import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdituserComponent } from './edituser.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ActionButtonModule } from '../../layouts/action-button/action-button.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [EdituserComponent],
  imports: [CommonModule,
            ReactiveFormsModule,
            MatStepperModule,
            MatFormFieldModule,
            ActionButtonModule,
            MatButtonToggleModule,
            
],
  exports: [ EdituserComponent ]
})
export class AgreusuarioModule { }