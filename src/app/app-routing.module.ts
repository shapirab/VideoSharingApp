import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosContainerComponent } from './components/videos-container/videos-container.component';
import { VideoUploadComponent } from './components/video-upload/video-upload.component';

const routes: Routes = [
  { path: '', component: VideosContainerComponent },
  { path: 'clips', component: VideosContainerComponent },
  { path: 'upload', component: VideoUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
