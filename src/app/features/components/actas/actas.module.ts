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
import { SharedModule } from 'src/app/shared/shared.module';
import { EmptyStateModule } from 'src/app/shared/components/layouts/empty-state/empty-state.module';
import { TransposeModule } from 'src/app/shared/components/modals/transpose/transpose.module';

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
    TableModalModule,
    SharedModule,
    EmptyStateModule,
    TransposeModule
  ],
  exports: [ActasComponent]
})
export class ActasModule { }
