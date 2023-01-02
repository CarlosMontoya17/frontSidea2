import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendientsComponent } from './pendients.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    PendientsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [PendientsComponent]
})
export class PendientsModule { }
