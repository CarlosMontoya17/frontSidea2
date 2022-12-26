import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleBtnDirective } from './directives/toogle-btn.directive';

@NgModule({
  declarations: [
    ToogleBtnDirective
  ],
  imports: [CommonModule],
  exports: [ToogleBtnDirective]
})
export class SharedModule {}
