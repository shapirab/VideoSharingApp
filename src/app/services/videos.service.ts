import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VideoDto } from 'src/models/Dtos/videoDto';
import { Video } from 'src/models/entities/video';
import VideoParams from 'src/models/params/videoParams';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  baseUrl: string = environment.apiUrl;
  videos: Video[] = [];
  videosLoaded: Promise<void> | undefined;

  constructor(private http: HttpClient) {}

  getAllVideos(videoParams: VideoParams): Observable<Video[]> {
    let params = new HttpParams();

    if(videoParams.searchQuery){
      params = params.append('searchQuery', videoParams.searchQuery);
    }

    params = params.append('pageNumber', videoParams.pageNumber);
    params = params.append('pageSize', videoParams.pageSize);

    return this.http.get<Video[]>(`${this.baseUrl}/videos`, { params, observe: 'response' })
      .pipe(
        // Extract the body (Video[]) from the HttpResponse
        map(response => response.body as Video[])
      );
  }

  getVideoByBytes(id: number): Observable<string>{
    return this.http.get<string>(`${this.baseUrl}/videos/video-bytes/${id}`, { responseType: 'text' as 'json' });
  }

  uploadVideo(videoDto: any): Observable<Video> {
    console.log('videoService::uploadVideo(). videoDto: ', videoDto)
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Video>(`${this.baseUrl}/videos/upload-video`, videoDto, {headers});
  }
}
