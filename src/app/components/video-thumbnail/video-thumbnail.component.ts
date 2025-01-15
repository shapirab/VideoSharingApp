import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/models/entities/video';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video?: Video
  constructor() { }

  ngOnInit(): void {
  }

  stopVideo(videoPlayer: HTMLVideoElement){
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  playVideo(videoPlayer: HTMLVideoElement){
    videoPlayer.play();
  }

}
