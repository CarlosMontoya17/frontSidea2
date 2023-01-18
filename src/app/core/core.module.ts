import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { LoginModule } from './components/login/login.module';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule, LoginModule, LayoutModule],
})
export class CoreModule {}
