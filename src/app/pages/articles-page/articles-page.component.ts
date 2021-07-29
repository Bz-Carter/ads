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
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  tags: Tag[] = [];
  videos: Video[] = [];
  lastPage: number;

  constructor(
    private articleService: ArticleService,
    private videoService: VideoService,
    private categoryService: CategoryService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {

    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.articleService.all(currentPage).subscribe((res: Response) => {
      this.articles = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.categoryService.all(currentPage).subscribe((res: Response) => {
      this.categories = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.tagService.all(currentPage).subscribe((res: Response) => {
      this.tags = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.videoService.all(currentPage).subscribe((res: Response) => {
      this.videos = res.data;
      this.lastPage = res.meta.last_page;
    });
  }
}