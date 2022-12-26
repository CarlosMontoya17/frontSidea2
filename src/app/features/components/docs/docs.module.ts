import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';



@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DocsComponent]
})
export class DocsModule { }
