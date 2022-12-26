import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRequestsComponent } from './card-requests.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorSimpleModule } from '../../modals/error-simple/error-simple.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    CardRequestsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ErrorSimpleModule,
    MatDialogModule
  ],
  exports: [CardRequestsComponent]
})
export class CardRequestsModule { }
