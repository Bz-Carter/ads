import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './media.component';
import { AudioComponent } from './audio/audio.component';
import { PhotoComponent } from './photo/photo.component';
import { VideoComponent } from './video/video.component';
import { DirecteComponent } from './directe/directe.component';


@NgModule({
  declarations: [
    MediaComponent,
    AudioComponent,
    PhotoComponent,
    VideoComponent,
    DirecteComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
