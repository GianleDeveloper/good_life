import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../main/news/news.component';
import { ContactComponent } from '../main/contact/contact.component';
import { BlogComponent } from '../main/blog/blog.component';
import { MainComponent } from '../main/main.component';

const appRoutes: Routes = [
  { path: '',         component: NewsComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'blog',    component: BlogComponent },
  { path: '**',       component: BlogComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
