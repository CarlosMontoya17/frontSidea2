import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersCibersComponent } from './filters-cibers.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { SearchModule } from '../search/search.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InputColorsModule } from '../../modals/input-colors/input-colors.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    FiltersCibersComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    SearchModule,
    SharedModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    DragDropModule,
    InputColorsModule,
    MatDialogModule
  ],
  exports: [
    FiltersCibersComponent
  ]
})
export class FiltersCibersModule { }
