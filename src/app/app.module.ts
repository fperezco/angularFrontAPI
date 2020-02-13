import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VideoCategoryComponent } from './components/video-category/video-category.component';
import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routes';
import { VideosComponent } from './components/videos/videos.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoCategoryComponent,
    VideoComponent,
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
