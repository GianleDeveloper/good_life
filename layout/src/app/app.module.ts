import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './main/news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { BlogComponent } from './main/blog/blog.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: '',         component: NewsComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'blog',    component: BlogComponent },
  { path: '**',       component: BlogComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    ContactComponent,
    BlogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
