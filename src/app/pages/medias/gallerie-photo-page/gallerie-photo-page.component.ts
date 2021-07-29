import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';
import { Response } from 'src/app/interfaces/response';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-gallerie-photo-page',
  templateUrl: './gallerie-photo-page.component.html',
  styleUrls: ['./gallerie-photo-page.component.css']
})
export class GalleriePhotoPageComponent implements OnInit {

  photos: Photo[] = [];
  lastPage: number;

  constructor( private photoService: PhotoService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.photoService.all(currentPage).subscribe((res: Response) => {
      this.photos = res.data;
      this.lastPage = res.meta.last_page;
    });
  }

}
