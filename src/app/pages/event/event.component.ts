import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/interfaces/type';
import { Media } from 'src/app/interfaces/media';
import { Response } from 'src/app/interfaces/response';
import { TypeService } from 'src/app/services/type.service';
import { MediaService } from 'src/app/services/media.service';
import { SlugifyPipe } from 'src/app/slugify.pipe';
declare var $: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [SlugifyPipe],

})
export class EventComponent implements OnInit {
  types: Type[] = [];
  public events: Media[] = [];

  public searchTerm: string = '';
  searchKey: string = '';

  public filterType: any;

  constructor(
    private typeService: TypeService,
    private mediaService: MediaService,
    private slugify: SlugifyPipe
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.mediaService.search.subscribe((val: any) => {
      $.getScript('assets/js/custom.js');
      this.searchKey = val;
    });
  }

  refresh() {
    this.typeService.all().subscribe((res: Response) => {
      this.types = res.data;
    });

    this.mediaService.all().subscribe((res: Response) => {
      $.getScript('assets/js/custom.js');
      this.events = res.data;
      this.filterType = res.data;
      this.events.forEach((e: any) => {
        this.types.forEach((t: any) => {
          if (e.type === t.id) {
            e.type = t.name;
          }
        });
        if (e.name) {
          e.slug = this.slugify.transform(e.name);
        }
      });
      // console.log(this.events);
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.mediaService.search.next(this.searchTerm);
  }

  filter(type: string) {
    this.filterType = this.events
    .filter((e:any) => {
      if (e.type == type || type == '') {
        return e;
      }
    });
  }
}
