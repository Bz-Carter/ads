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
  page = 1;
  count = 0;
  tableSize = 8;
  tableSizes = [3, 6, 9, 12];

  constructor(
    private articleService: ArticleService,
    private videoService: VideoService,
    private categoryService: CategoryService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
    this.refresh();
  }

  refresh() {
   
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

  fetchPosts(): void {
    this.articleService.all().subscribe((res: Response) => {
      this.articles = res.data;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
    window.scrollTo(0, 0);
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }  

}
