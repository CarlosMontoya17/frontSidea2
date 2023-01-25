import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualComponent } from './manual.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ManualComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    FormsModule,
    SharedModule
  ],
  exports: [ ManualComponent ]
})
export class ManualModule { }
