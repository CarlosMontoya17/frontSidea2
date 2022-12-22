import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, SidebarModule, NavbarModule],
})
export class LayoutModule {}
