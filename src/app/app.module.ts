import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { AboutsComponent } from './pages/abouts/abouts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutsComponent,
    ContactsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
