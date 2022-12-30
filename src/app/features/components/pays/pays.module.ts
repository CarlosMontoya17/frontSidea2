import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysComponent } from './pays.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardFilterModule } from 'src/app/shared/components/layouts/card-filter/card-filter.module';
import { CardRequestsModule } from 'src/app/shared/components/layouts/card-requests/card-requests.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from "../../../shared/shared.module";
import { CardCorteModule } from 'src/app/shared/components/layouts/card-corte/card-corte.module';
import { PaysFilterModule } from 'src/app/shared/components/layouts/pays-filter/pays-filter.module';



@NgModule({
    declarations: [
        PaysComponent
    ],
    exports: [PaysComponent],
    imports: [
        CommonModule,
        CardInformationModule,
        FontAwesomeModule,
        CardFilterModule,
        CardRequestsModule,
        MatGridListModule,
        SharedModule,
        CardCorteModule,
        PaysFilterModule
    ]
})
export class PaysModule { }
