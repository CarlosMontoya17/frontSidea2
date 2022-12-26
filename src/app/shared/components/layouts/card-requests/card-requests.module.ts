import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRequestsComponent } from './card-requests.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CardRequestsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [CardRequestsComponent]
})
export class CardRequestsModule { }
