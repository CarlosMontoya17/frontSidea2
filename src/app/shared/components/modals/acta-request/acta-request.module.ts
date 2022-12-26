import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActaRequestComponent } from './acta-request.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ActaRequestComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FontAwesomeModule,
    ActionButtonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    ActaRequestComponent
  ]
})
export class ActaRequestModule { }
