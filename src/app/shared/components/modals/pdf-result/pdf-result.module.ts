import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfResultComponent } from './pdf-result.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PdfResultComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    FormsModule,
    SharedModule
  ]
})
export class PdfResultModule { }
