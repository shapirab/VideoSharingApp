import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideosContainerComponent } from './components/videos-container/videos-container.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideosContainerComponent,
    VideoThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
