import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformationComponent } from './card-information.component';
import { ActionButtonModule } from '../action-button/action-button.module';



@NgModule({
  declarations: [
    CardInformationComponent
  ],
  imports: [
    CommonModule,
    ActionButtonModule
  ],
  exports: [ CardInformationComponent ]
})
export class CardInformationModule { }
