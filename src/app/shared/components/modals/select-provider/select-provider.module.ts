import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectProviderComponent } from './select-provider.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SelectProviderComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ActionButtonModule,
    SharedModule,
    FormsModule
  ]
})
export class SelectProviderModule { }
