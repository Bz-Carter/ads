import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { CalendrierComponent } from './calendrier/calendrier.component';


@NgModule({
  declarations: [
    EventComponent,
    CalendrierComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
