import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-drop.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';


@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule
  ]
})
export class DragDropModule { }
