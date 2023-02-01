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
import { BuscarciberPipe } from './pipes/buscarciber.pipe';
import { RfcmValidationDirective } from './directives/rfcm-validation.directive';
import { LimitPipe } from './pipes/limit.pipe';
import { NoDownloadPipe } from './pipes/no-download.pipe';
import { NoAssignPipe } from './pipes/no-assign.pipe';




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
    CadenaValidationDirective,
    BuscarciberPipe,
    RfcmValidationDirective,
    LimitPipe,
    NoDownloadPipe,
    NoAssignPipe, 
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
    CadenaValidationDirective,
    BuscarciberPipe,
    RfcmValidationDirective,
    LimitPipe,
    NoDownloadPipe,
    NoAssignPipe
  ]
})
export class SharedModule {}
