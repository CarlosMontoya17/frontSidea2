import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleBtnDirective } from './directives/toogle-btn.directive';
import { UpperTextDirective } from './directives/upper-text.directive';
import { CurpValidationDirective } from './directives/curp-validation.directive';
import { DatingPipe } from './pipes/dating.pipe';
import { SearchingPipe } from './pipes/searching.pipe';
import { UserNamePipe } from './pipes/user-name.pipe';
import { RfcValidationDirective } from './directives/rfc-validation.directive';
import { FiltrarPipe } from './pipes/filtrar.pipe';

//import { DetailsCorteComponent } from './components/layouts/details-corte/details-corte.component';
//import { PaysFilterComponent } from './components/layouts/pays-filter/pays-filter.component';

@NgModule({
  declarations: [
    ToogleBtnDirective,
    UpperTextDirective,
    CurpValidationDirective,
    DatingPipe,
    SearchingPipe,
    UserNamePipe,
    RfcValidationDirective,
    FiltrarPipe
  ],
  imports: [CommonModule],
  exports: [
    ToogleBtnDirective, 
    UpperTextDirective, 
    CurpValidationDirective, 
    DatingPipe,
    SearchingPipe,
    UserNamePipe,
    RfcValidationDirective,
    FiltrarPipe
  ]
})
export class SharedModule {}
