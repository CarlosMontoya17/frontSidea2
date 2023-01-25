import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCorteComponent } from './details-corte.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { InputColorsModule } from '../../modals/input-colors/input-colors.module';
import { MatMenuModule } from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    DetailsCorteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    InputColorsModule,
    MatExpansionModule,
    MatDividerModule
  ],
  exports: [DetailsCorteComponent]
})
export class DetailsCorteModule { }
