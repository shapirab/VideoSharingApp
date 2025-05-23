import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosContainerComponent } from './components/videos/videos-container/videos-container.component';
import { VideoUploadComponent } from './components/videos/video-upload/video-upload.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';

const routes: Routes = [
  { path: '', component: VideosContainerComponent },
  { path: 'clips', component: VideosContainerComponent },
  { path: 'upload', component: VideoUploadComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
    {path: 'not-authorized', component: NotAuthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
