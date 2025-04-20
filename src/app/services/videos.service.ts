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
    return this.http.get<string>(`${this.baseUrl}/videos/video-bytes/${id}`, { responseType: 'text' as 'json' });
  }

  uploadVideo(videoDto: any): Observable<Video> {
    console.log('videoService::uploadVideo(). videoDto: ', videoDto)
    return this.http.post<Video>(`${this.baseUrl}/videos/upload-video`, videoDto);
  }
}
