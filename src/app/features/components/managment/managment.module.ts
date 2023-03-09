import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagmentComponent } from './managment.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';

import { CardInformationComponent } from 'src/app/shared/components/layouts/card-information/card-information.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AgGridModule } from 'ag-grid-angular';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import 'ag-grid-enterprise'
import { AddUserModule } from 'src/app/shared/components/modals/add-user/add-user.module';
import { EditUserModule } from 'src/app/shared/components/modals/edit-user/edit-user.module';
import { FormsModule } from '@angular/forms';
import { CardRequestsModule } from "../../../shared/components/layouts/card-requests/card-requests.module";
import { EmptyStateModule } from "../../../shared/components/layouts/empty-state/empty-state.module";
import { ItemRequestsModule } from "../../../shared/components/layouts/item-requests/item-requests.module";
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [
        ManagmentComponent,
    ],
    exports: [ManagmentComponent],
    imports: [
        CommonModule,
        CardInformationModule,
        MatDialogModule,
        AgGridModule,
        NgxPaginationModule,
        SharedModule,
        AddUserModule,
        EditUserModule,
        SharedModule,
        FormsModule,
        MatTooltipModule,

      
    
    
    ]
})
export class ManagmentModule { }
