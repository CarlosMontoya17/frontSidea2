import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderInterceptorProv } from './core/interceptor/loader.interceptor';
import { TokenInterceptorProv } from './core/interceptor/token.interceptor';
import { LoaderModule } from './shared/components/loader/loader.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { LoginModule } from './core/components/login/login.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LoaderModule, CoreModule, BrowserAnimationsModule],
  providers: [LoaderInterceptorProv],
  bootstrap: [AppComponent],
})
export class AppModule {}
