import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SingleComponent } from './single/single.component';


@NgModule({
  declarations: [
    BlogComponent,
    SideBarComponent,
    SingleComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
