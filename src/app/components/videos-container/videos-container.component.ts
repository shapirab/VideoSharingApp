import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/models/entities/video';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css']
})
export class VideosContainerComponent implements OnInit {
  videos: Video[] = [];
  constructor(private videoService: VideosService) { }

  async ngOnInit(): Promise<void> {
    this.videos = await this.videoService.getAllVideos();
    console.log(this.videos)
  }
}
