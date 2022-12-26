import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { TokenInterceptorProv } from '../../interceptor/token.interceptor';
import { HomeModule } from 'src/app/features/components/home/home.module';
import { ActasModule } from 'src/app/features/components/actas/actas.module';
import { ManagmentModule } from 'src/app/features/components/managment/managment.module';
import { RfcsModule } from 'src/app/features/components/rfcs/rfcs.module';
import { PaysModule } from 'src/app/features/components/pays/pays.module';
import { DocsModule } from 'src/app/features/components/docs/docs.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule, 
    SidebarModule, 
    NavbarModule, 
    HomeModule, 
    ActasModule, 
    ManagmentModule,
    RfcsModule,
    PaysModule,
    DocsModule
  ],
  exports: [LayoutComponent],
  providers: [TokenInterceptorProv]
})
export class LayoutModule {}
