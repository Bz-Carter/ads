import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { EventComponent } from './event.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: ':id', component: SingleComponent },
  { path: 'calendrier', component: CalendrierComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
