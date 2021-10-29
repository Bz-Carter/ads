import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Media } from 'src/app/interfaces/media';
import { Category } from 'src/app/interfaces/category';
import { Response } from 'src/app/interfaces/response';
import { Video } from 'src/app/interfaces/video';
import { Photo } from 'src/app/interfaces/photo';
import { MediaService } from 'src/app/services/media.service';
import { CategoryService } from 'src/app/services/category.service';
import { VideoService } from 'src/app/services/video.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  event: Media;
  categories: Category[] = [];
  videos: Video[] = [];
  photos: Photo[] = [];


  constructor(
    private categoryService: CategoryService,
    private MediaService: MediaService,
    private videoService: VideoService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.videoService.all().subscribe((res: Response) => {
      this.videos = res.data;
    });

    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.photoService.all().subscribe((res: Response) => {
      this.photos = res.data;
    });

    this.route.params.subscribe((params) => {
      this.MediaService.get(params.id).subscribe((res: Response) => {
        this.event = res.data;
      });
    });
  }

}
