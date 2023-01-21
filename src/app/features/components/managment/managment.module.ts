import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagmentComponent } from './managment.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { CardFilterComponent } from 'src/app/shared/components/layouts/card-filter/card-filter.component';
import { CardInformationComponent } from 'src/app/shared/components/layouts/card-information/card-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import 'ag-grid-enterprise'
import { AddUserModule } from 'src/app/shared/components/modals/add-user/add-user.module';
import { EditUserModule } from 'src/app/shared/components/modals/edit-user/edit-user.module';

@NgModule({
  declarations: [
    ManagmentComponent, 
    
  ],
  imports: [
    CommonModule,
    CardInformationModule,
    MatDialogModule,
    AgGridModule,
    NgxPaginationModule,
    SharedModule,
    AddUserModule,
    EditUserModule
   
  ],
  exports: [ManagmentComponent]
})
export class ManagmentModule { }
