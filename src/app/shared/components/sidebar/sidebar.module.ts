import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FontAwesomeModule, HttpClientModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
