import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/models/entities/video';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.css']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() video?: Video
  videoSource: any = '';
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  constructor(private videoService: VideosService, private cdRef: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.video) {
      this.loadVideo();
    }
  }

  loadVideo(): void {
    console.log('videoThumbnailComponent::loadVideo(). video = ', this.video)
    if(!this.video){
      return;
    }
    this.videoService.getVideoByBytes(this.video.id).subscribe(base64Video => {
      let byteCharacters = atob(base64Video);
      let byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      let blob = new Blob([byteArray], { type: 'video/mp4' });
      console.log('Blob created: ', blob);
      const blobUrl = URL.createObjectURL(blob);
      this.videoSource = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
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
