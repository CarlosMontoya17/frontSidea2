import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActasComponent } from './actas.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardFilterModule } from 'src/app/shared/components/layouts/card-filter/card-filter.module';
import { CardRequestsModule } from 'src/app/shared/components/layouts/card-requests/card-requests.module';

import {MatGridListModule} from '@angular/material/grid-list';

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
    MatGridListModule
  ],
  exports: [ActasComponent]
})
export class ActasModule { }
