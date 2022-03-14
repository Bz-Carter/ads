import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular/11';
import { NgxPaginationModule } from 'ngx-pagination';
import {YouTubePlayerModule} from '@angular/youtube-player';


import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SingleComponent } from './single/single.component';


@NgModule({
  declarations: [
    EventComponent,
    CalendrierComponent,
    FilterPipe,
    SingleComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LightgalleryModule,
    NgxPaginationModule,
    YouTubePlayerModule
  ]
})
export class EventModule { }
