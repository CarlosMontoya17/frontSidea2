import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFilterComponent } from './card-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToogleBtnDirective } from 'src/app/shared/directives/toogle-btn.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    CardFilterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [CardFilterComponent]
})
export class CardFilterModule { }
