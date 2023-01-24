import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { DragDropModule } from 'src/app/shared/components/modals/drag-drop/drag-drop.module';
import { PdfResultModule } from 'src/app/shared/components/modals/pdf-result/pdf-result.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { MatMenuModule } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransposeModule } from 'src/app/shared/components/modals/transpose/transpose.module';
import { YnSimpleModule } from 'src/app/shared/components/modals/yn-simple/yn-simple.module';
import { ManualModule } from 'src/app/shared/components/modals/manual/manual.module';



@NgModule({
  declarations: [
    DocsComponent
  ],
  imports: [
    CommonModule,
    CardInformationModule,
    DragDropModule,
    PdfResultModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    AgGridModule,
    MatMenuModule,
    FontAwesomeModule,
    TransposeModule,
    YnSimpleModule,
    ManualModule
  ],
  exports: [DocsComponent]
})
export class DocsModule { }
