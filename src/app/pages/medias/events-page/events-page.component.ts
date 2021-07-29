import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { Video } from 'src/app/interfaces/video';
import { Media } from 'src/app/interfaces/media';
import { Response } from 'src/app/interfaces/response';
import { PhotoService } from 'src/app/services/photo.service';
import { VideoService } from 'src/app/services/video.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
})
export class EventsPageComponent implements OnInit {
  photos: Photo[] = [];
  videos: Video[] = [];
  medias: Media[] = [];
  lastPage: number;

  constructor(
    private photoService: PhotoService,
    private videoService: VideoService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.photoService.all(currentPage).subscribe((res: Response) => {
      this.photos = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.videoService.all(currentPage).subscribe((res: Response) => {
      this.videos = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.mediaService.all(currentPage).subscribe((res: Response) => {
      this.medias = res.data;
      this.lastPage = res.meta.last_page;
    });
  }
}
