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
import { CadenaValidationDirective } from './directives/cadena-validation.directive';

@NgModule({
  declarations: [
    ToogleBtnDirective,
    UpperTextDirective,
    CurpValidationDirective,
    DatingPipe,
    SearchingPipe,
    UserNamePipe,
    RfcValidationDirective,
    FiltrarPipe,
    CadenaValidationDirective
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
    FiltrarPipe,
    CadenaValidationDirective
  ]
})
export class SharedModule {}
