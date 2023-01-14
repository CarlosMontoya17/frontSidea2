import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports:  [ DropdownComponent ]
})
export class DropdownModule { }
