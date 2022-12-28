import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyStateComponent } from './empty-state.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    EmptyStateComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [EmptyStateComponent]
})
export class EmptyStateModule { }
