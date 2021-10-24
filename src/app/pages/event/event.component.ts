import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Media } from 'src/app/interfaces/media';
import { Response } from 'src/app/interfaces/response';
import { CategoryService } from 'src/app/services/category.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  categories: Category[] = [];
  public events: Media[] = [];

  public searchTerm: string = '';
  searchKey: string = '';

  public filterCategory: any;

  constructor(
    private categoryService: CategoryService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.mediaService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  refresh() {
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });

    this.mediaService.all().subscribe((res: Response) => {
      this.events = res.data;
      this.filterCategory = res.data;
      this.events.forEach((a: any) => {
        this.categories.forEach((c: any) => {
          if (a.category === c.id) {
            a.category = c.name;
          }
        });
      });
      console.log(this.events);
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.mediaService.search.next(this.searchTerm);
  }

  filter(category: string) {
    this.filterCategory = this.events
    .filter((a:any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
