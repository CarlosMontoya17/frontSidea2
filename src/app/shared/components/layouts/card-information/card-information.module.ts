import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInformationComponent } from './card-information.component';
import { ActionButtonModule } from '../action-button/action-button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CardInformationComponent
  ],
  imports: [
    CommonModule,
    ActionButtonModule,
    FontAwesomeModule
  ],
  exports: [ CardInformationComponent ]
})
export class CardInformationModule { }
