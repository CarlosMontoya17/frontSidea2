import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreferencesComponent } from './preferences.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';



@NgModule({
  declarations: [
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule
  ]
})
export class PreferencesModule { }
