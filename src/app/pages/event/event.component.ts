import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Media } from 'src/app/interfaces/media';
import { Response } from 'src/app/interfaces/response';
import { CategoryService } from 'src/app/services/category.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  categories: Category[] = [];
  public events: Media[] = [];

  public searchTerm: string = '';
  searchKey:string = "";
  
  
  constructor(
    private categoryService: CategoryService,
    private mediaService: MediaService
  ) { }

  ngOnInit(): void {
    this.refresh();
    this.mediaService.search.subscribe((val:any) => {
      this.searchKey = val;
    });
  }

  refresh() {
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.mediaService.all().subscribe((res: Response) => {
          this.events = res.data;
        });
    
  }

  search(event:any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.mediaService.search.next(this.searchTerm);
  }

  

}
