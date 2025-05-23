import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/models/entities/video';
import VideoParams from 'src/models/params/videoParams';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.css']
})
export class VideosContainerComponent implements OnInit {
  videos: Video[] = [];
  videoParams = new VideoParams();
  constructor(private videoService: VideosService) { }

  async ngOnInit(): Promise<void> {
    this.loadVideos();
  }

  loadVideos(){
    this.videoService.getAllVideos(this.videoParams).subscribe({
      next: videos => this.videos = videos,
      error: err => console.log(err)
    });
  }

  onFilterSelect(event: any){
    this.videoParams.searchQuery = event.target.value;
    this.loadVideos();
  }
}
