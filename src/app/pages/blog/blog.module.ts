import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SingleComponent } from './single/single.component';
import { ByCategoryComponent } from './filters/by-category/by-category.component';
import { ByTagComponent } from './filters/by-tag/by-tag.component';


@NgModule({
  declarations: [
    BlogComponent,
    SideBarComponent,
    SingleComponent,
    ByCategoryComponent,
    ByTagComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
