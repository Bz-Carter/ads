import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightgalleryModule } from 'lightgallery/angular/11';

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
    LightgalleryModule
  ]
})
export class EventModule { }
