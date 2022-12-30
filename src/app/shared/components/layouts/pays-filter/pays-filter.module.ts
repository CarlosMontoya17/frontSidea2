import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToogleBtnDirective } from 'src/app/shared/directives/toogle-btn.directive';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PaysFilterComponent } from './pays-filter.component';
import { CardCorteComponent } from '../card-corte/card-corte.component';

@NgModule({
  declarations: [
    PaysFilterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [PaysFilterComponent]
})
export class PaysFilterModule { }
