import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioComponent } from './audio/audio.component';
import { DirecteComponent } from './directe/directe.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: 'directe', component: DirecteComponent },
  { path: 'audio', component: AudioComponent },
  { path: 'videos', component: VideoComponent },
  { path: 'photos', component: PhotoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
