import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/services/videos.service';
import { VideoDto } from 'src/models/Dtos/videoDto';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent implements OnInit {
  selectedFile: File | null = null;
  coverImg: string = '';
  title: string = '';
  rating: number = 0;

  constructor(private videoService: VideosService, private router: Router) { }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onVideoSubmit(){
    if (this.selectedFile && this.coverImg && this.title) {
      const videoDto: VideoDto = {
        VideoFile: this.selectedFile,
        CoverImg: this.coverImg,
        Title: this.title,
      };
      this.videoService.uploadVideo(videoDto).subscribe({
        next: () => this.router.navigateByUrl('clips'),
        error: err => console.log(err)
      });
    }
  }
}
