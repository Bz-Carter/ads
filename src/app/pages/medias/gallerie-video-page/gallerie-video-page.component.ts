import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces/video';
import { Response } from 'src/app/interfaces/response';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-gallerie-video-page',
  templateUrl: './gallerie-video-page.component.html',
  styleUrls: ['./gallerie-video-page.component.css']
})
export class GallerieVideoPageComponent implements OnInit {

  videos: Video[] = [];
  lastPage: number;

  constructor( private videoService: VideoService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.videoService.all(currentPage).subscribe((res: Response) => {
      this.videos = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

}
