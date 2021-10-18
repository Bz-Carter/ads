import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { EventComponent } from './event.component';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: 'calendrier', component: CalendrierComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
