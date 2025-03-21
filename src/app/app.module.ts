import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosContainerComponent } from './components/videos-container/videos-container.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideosContainerComponent,
    VideoThumbnailComponent,
    VideoUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
