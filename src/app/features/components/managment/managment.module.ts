import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagmentComponent } from './managment.component';



@NgModule({
  declarations: [
    ManagmentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ManagmentComponent]
})
export class ManagmentModule { }
