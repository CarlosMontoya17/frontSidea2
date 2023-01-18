import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreusuarioComponent } from './agreusuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActionButtonModule } from '../../layouts/action-button/action-button.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectProviderModule } from '../select-provider/select-provider.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [AgreusuarioComponent],
  imports: [CommonModule,
            ReactiveFormsModule,
            MatStepperModule,
            MatFormFieldModule,
            ActionButtonModule,
            MatButtonToggleModule,
            FontAwesomeModule,
            SharedModule,
            FormsModule,
            MatDialogModule,
            SelectProviderModule,
            MatProgressBarModule
],
  exports: [ AgreusuarioComponent ]
})
export class AgreusuarioModule { }
