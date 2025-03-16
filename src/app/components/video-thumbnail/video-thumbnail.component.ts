import { Component, Input, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/models/entities/video';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video?: Video
  videoSource: string = '';
  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    if (this.video) {
      this.loadVideo();
    }
  }

  loadVideo(): void {
    if(!this.video){
      return;
    }
    this.videoService.getVideoByBytes(this.video.Id).subscribe(base64Video => {
      let byteCharacters = atob(base64Video);
      let byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray], { type: 'video/mp4' });
      this.videoSource = URL.createObjectURL(blob);
    });
  }

  stopVideo(videoPlayer: HTMLVideoElement){
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  playVideo(videoPlayer: HTMLVideoElement){
    videoPlayer.play();
  }

}
