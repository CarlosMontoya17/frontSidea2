import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemRequestsComponent } from './item-requests.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorSimpleModule } from '../../modals/error-simple/error-simple.module';



@NgModule({
  declarations: [
    ItemRequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    MatTooltipModule,
    MatDialogModule,
    ErrorSimpleModule
  ],
  exports: [ ItemRequestsComponent ]
})
export class ItemRequestsModule { }
