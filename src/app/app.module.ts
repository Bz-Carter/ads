import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LightgalleryModule } from 'lightgallery/angular';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { ArticlesSinglePageComponent } from './pages/articles-page/articles-single-page/articles-single-page.component';
import { DirectPageComponent } from './pages/direct-page/direct-page.component';
import { DonatePageComponent } from './pages/donate-page/donate-page.component';
import { GalleriePhotoPageComponent } from './pages/medias/gallerie-photo-page/gallerie-photo-page.component';
import { GallerieVideoPageComponent } from './pages/medias/gallerie-video-page/gallerie-video-page.component';
import { EventsPageComponent } from './pages/medias/events-page/events-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    ContactPageComponent,
    AboutPageComponent,
    ArticlesPageComponent,
    ArticlesSinglePageComponent,
    DirectPageComponent,
    DonatePageComponent,
    GalleriePhotoPageComponent,
    GallerieVideoPageComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightgalleryModule
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
