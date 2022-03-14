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
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  videosActivate = false;
  safeSrc: SafeResourceUrl;

  event: Media;
  categories: Category[] = [];
  videos: Video[] = [];
  photos: Photo[] = [];
  tofs = [];
  movies = [];

  constructor(
    private sanitizer: DomSanitizer,    
    private categoryService: CategoryService,
    private MediaService: MediaService,
    private videoService: VideoService,
    private photoService: PhotoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    $.getScript('assets/js/custom.js');

    this.route.params.subscribe((params) => {
      this.MediaService.get(params.id).subscribe((res: Response) => {
        $.getScript('assets/js/custom.js');
        this.event = res.data;
      });
      this.photoService.all().subscribe((res: Response) => {
        $.getScript('assets/js/custom.js');
        this.photos = res.data;
        this.photos.forEach((p: any) => {
          this.event.photos.forEach((e: any) => {
            if (p.id === e) {
              this.tofs.push({ 
                id: p.id,
                name: p.name,
                image: p.image,
                alt: p.alt,
                owner: p.owner,
                created: p.created
              })
            }
          });
        });
      });
      this.videoService.all().subscribe((res: Response) => {
        $.getScript('assets/js/custom.js');
        this.videos = res.data;
        this.videos.forEach((v: any) => {
          this.event.videos.forEach((e: any) => {
            if (v.id === e) {
              this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + v.link);
              link: v.link = this.safeSrc;
              this.movies.push({ 
                id: v.id,
                name: v.name,
                link: v.link,
                owner: v.owner,
                created: v.created
              })
            }
          });
        });
        console.log(this.movies)
      });
    });
  }
  

  videosActive() {
    $.getScript('assets/js/custom.js');
    this.videosActivate = !this.videosActivate;
  }
  photosActive() {
    $.getScript('assets/js/custom.js');
    this.videosActivate = false;
  }


}
