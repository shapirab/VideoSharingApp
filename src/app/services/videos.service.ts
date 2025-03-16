import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoDto } from 'src/models/Dtos/videoDto';
import { Video } from 'src/models/entities/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  baseUrl: string = environment.apiUrl;
  videos: Video[] = [];
  videosLoaded: Promise<void> | undefined;

  constructor(private http: HttpClient) {}

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.baseUrl}/videos`);
  }

  getVideoByBytes(id: number): Observable<string>{
    return this.http.get<string>(`${this.baseUrl}/videos/video-bytes/${id}`);
  }

  uploadVideo(videoDto: VideoDto): Observable<Video> {
    const formData: FormData = new FormData();
    formData.append('videoFile', videoDto.VideoFile);
    formData.append('coverImg', videoDto.CoverImg);
    formData.append('title', videoDto.Title);

    return this.http.post<Video>(`${this.baseUrl}/videos/upload-video`, formData);
  }


  // base64ToBlob(dataUrl: string): Blob {
  //   const arr = dataUrl.split(',');
  //   const mime = arr?.[0]?.match(/:(.*?);/)?.[1];
  //   const blobStr = atob(arr[1]);
  //   let blobLength = blobStr.length;
  //   const u8arr = new Uint8Array(blobLength);

  //   while (blobLength--) {
  //       u8arr[blobLength] = blobStr.charCodeAt(blobLength);
  //   }

  //   return new Blob([u8arr], {type: mime});
  // }


}
