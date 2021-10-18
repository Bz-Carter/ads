import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Tag } from 'src/app/interfaces/tag';
import { Video } from 'src/app/interfaces/video';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Input('categories') categories: Category = null;
  @Input('tags') tags: Tag = null;
  @Input('videos') videos: Video = null;

  constructor() {}

  ngOnInit(): void {}
}
