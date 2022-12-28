import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransposeComponent } from './transpose.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatDialogModule} from '@angular/material/dialog';

import {MatTooltipModule} from '@angular/material/tooltip';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransposeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatDialogModule,
    ActionButtonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ TransposeComponent ]
})
export class TransposeModule { }
