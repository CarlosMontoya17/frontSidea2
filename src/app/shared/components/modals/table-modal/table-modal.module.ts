import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModalComponent } from './table-modal.component';
import {MatTableModule} from '@angular/material/table';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';


@NgModule({
  declarations: [
    TableModalComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ActionButtonModule
  ]
})
export class TableModalModule { }
