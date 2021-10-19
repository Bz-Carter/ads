import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { Category } from 'src/app/interfaces/category';
import { Response } from 'src/app/interfaces/response';
import { Tag } from 'src/app/interfaces/tag';
import { Video } from 'src/app/interfaces/video';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.component.html',
  styleUrls: ['./by-category.component.css']
})
export class ByCategoryComponent implements OnInit {

  articles: Article[] = [];
  category: Category;
  tags: Tag[] = [];
  videos: Video[] = [];

  constructor(
    private categoryService: CategoryService,
    private tagService: TagService,
    private articleService: ArticleService,
    private videoService: VideoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.videoService.all().subscribe((res: Response) => {
      this.videos = res.data;
    });

    this.articleService.all().subscribe((res: Response) => {
      this.articles = res.data;
    });

    this.tagService.all().subscribe((res: Response) => {
      this.tags = res.data;
    });

    this.route.params.subscribe((params) => {
      this.categoryService.get(params.id).subscribe((res: Response) => {
        this.category = res.data;
      });
    });
  }

  filterFunction(articles): any[] {
    return articles.filter(article => article.category === this.category.id)
  }

}
