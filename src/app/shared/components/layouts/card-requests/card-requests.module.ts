import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRequestsComponent } from './card-requests.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorSimpleModule } from '../../modals/error-simple/error-simple.module';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    CardRequestsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ErrorSimpleModule,
    MatDialogModule,
    SharedModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  exports: [CardRequestsComponent]
})
export class CardRequestsModule { }
