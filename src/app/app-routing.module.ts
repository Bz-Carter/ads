import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './pages/abouts/abouts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'media', 
    loadChildren: () => import('./pages/media/media.module').then(m => m.MediaModule)
  },
  {
    path: 'evenement', 
    loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)
  },
  {
    path: 'articles', 
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
  },
  { path: 'a-propos', component: AboutsComponent },
  { path: 'contactez-nous', component: ContactsComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
