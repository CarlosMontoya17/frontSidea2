import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSimpleComponent } from './error-simple.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ErrorSimpleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    FontAwesomeModule
  ],
  exports: [
    ErrorSimpleComponent
  ]
})
export class ErrorSimpleModule { }
