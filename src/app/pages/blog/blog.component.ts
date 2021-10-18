import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/interfaces/category";
import { Tag } from "src/app/interfaces/tag";
import { Article } from 'src/app/interfaces/article';
import { Video } from 'src/app/interfaces/video';
import { Response } from 'src/app/interfaces/response';
import { ArticleService } from 'src/app/services/article.service';
import { VideoService } from 'src/app/services/video.service';
import { CategoryService } from "src/app/services/category.service";
import { TagService } from "src/app/services/tag.service";
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Article[] = [];
  categories: Category[] = [];
  tags: Tag[] = [];
  videos: Video[] = [];

  constructor(
    private articleService: ArticleService,
    private videoService: VideoService,
    private categoryService: CategoryService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {

    this.refresh();
  }

  refresh() {
    this.articleService.all().subscribe((res: Response) => {
      this.articles = res.data;
    });
    this.categoryService.all().subscribe((res: Response) => {
      this.categories = res.data;
    });
    this.tagService.all().subscribe((res: Response) => {
      this.tags = res.data;
    });
    this.videoService.all().subscribe((res: Response) => {
      this.videos = res.data;
    });
  }

}
