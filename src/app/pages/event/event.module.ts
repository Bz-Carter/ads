import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    EventComponent,
    CalendrierComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventModule { }
