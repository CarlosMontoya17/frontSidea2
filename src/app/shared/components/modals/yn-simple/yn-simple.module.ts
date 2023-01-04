import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YnSimpleComponent } from './yn-simple.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    YnSimpleComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    FontAwesomeModule
  ]
})
export class YnSimpleModule { }
