import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RfcsComponent } from './rfcs.component';
import { CardInformationModule } from 'src/app/shared/components/layouts/card-information/card-information.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardFilterModule } from 'src/app/shared/components/layouts/card-filter/card-filter.module';
import { CardRequestsModule } from 'src/app/shared/components/layouts/card-requests/card-requests.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmptyStateModule } from 'src/app/shared/components/layouts/empty-state/empty-state.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TransposeModule } from 'src/app/shared/components/modals/transpose/transpose.module';



@NgModule({
  declarations: [
    RfcsComponent
  ],
  imports: [
    CommonModule,
    CardInformationModule,
    FontAwesomeModule,
    CardFilterModule,
    CardRequestsModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    EmptyStateModule,
    MatDialogModule,
    TransposeModule
  ],
  exports: [RfcsComponent]
})
export class RfcsModule { }
