import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ByCategoryComponent } from './filters/by-category/by-category.component';
import { ByTagComponent } from './filters/by-tag/by-tag.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: ':id', component: SingleComponent },
  { path: 'categorie/:id', component: ByCategoryComponent },
  { path: 'tags/:id', component: ByTagComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
