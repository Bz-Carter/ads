import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Tag } from 'src/app/interfaces/tag';
import { Video } from 'src/app/interfaces/video';
import { SlugifyPipe } from '../slugify.pipe';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers: [SlugifyPipe],
})
export class SideBarComponent implements OnInit {
  @Input('categories') categories: Category = null;
  @Input('tags') tags: Tag = null;
  @Input('videos') videos: Video = null;

  constructor(    private slugify: SlugifyPipe
    ) {}

  ngOnInit(): void {
    this.categories.forEach((c: any) => {
      if (c.name) {
        c.slug = this.slugify.transform(c.name);
      }
    });
    this.tags.forEach((t: any) => {
      if (t.name) {
        t.slug = this.slugify.transform(t.name);
      }
    });
  }
}
