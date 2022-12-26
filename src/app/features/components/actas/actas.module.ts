import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActasComponent } from './actas.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardFilterModule } from 'src/app/shared/components/layouts/card-filter/card-filter.module';
import { CardRequestsModule } from 'src/app/shared/components/layouts/card-requests/card-requests.module';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActaRequestModule } from 'src/app/shared/components/modals/acta-request/acta-request.module';
import { PreferencesModule } from 'src/app/shared/components/modals/preferences/preferences.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TableModalModule } from 'src/app/shared/components/modals/table-modal/table-modal.module';

@NgModule({
  declarations: [
    ActasComponent
  ],
  imports: [
    CommonModule,
    CardInformationModule,
    FontAwesomeModule,
    CardFilterModule,
    CardRequestsModule,
    MatGridListModule,
    ActaRequestModule,
    PreferencesModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TableModalModule
  ],
  exports: [ActasComponent]
})
export class ActasModule { }
