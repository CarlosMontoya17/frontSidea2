import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleBtnDirective } from './directives/toogle-btn.directive';
import { UpperTextDirective } from './directives/upper-text.directive';
import { CurpValidationDirective } from './directives/curp-validation.directive';

@NgModule({
  declarations: [
    ToogleBtnDirective,
    UpperTextDirective,
    CurpValidationDirective
  ],
  imports: [CommonModule],
  exports: [ToogleBtnDirective, UpperTextDirective, CurpValidationDirective]
})
export class SharedModule {}
