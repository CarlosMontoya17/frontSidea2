import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysComponent } from './pays.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardFilterModule } from 'src/app/shared/components/layouts/card-filter/card-filter.module';
import { CardRequestsModule } from 'src/app/shared/components/layouts/card-requests/card-requests.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModule } from "../../../shared/shared.module";
import { DetailsCorteModule } from 'src/app/shared/components/layouts/details-corte/details-corte.module';
import { MatMenuModule } from '@angular/material/menu';
import { DropdownModule } from 'src/app/shared/components/layouts/dropdown/dropdown.module';
import { SearchModule } from 'src/app/shared/components/layouts/search/search.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { FiltersCibersModule } from 'src/app/shared/components/layouts/filters-cibers/filters-cibers.module';

@NgModule({
    declarations: [
        PaysComponent
    ],
    imports: [
        CommonModule,
        CardInformationModule,
        FontAwesomeModule,
        CardFilterModule,
        CardRequestsModule,
        MatGridListModule,
        SharedModule,
        DetailsCorteModule,
        MatMenuModule,
        DropdownModule,
        SearchModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        FiltersCibersModule
    ],
    exports: [PaysComponent]
})
export class PaysModule { }
