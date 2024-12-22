import { Injectable } from '@angular/core';
import { Video } from 'src/models/entities/video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  videos: Video[] = [];
  videosLoaded: Promise<void> | undefined;

  constructor() {
    this.videosLoaded = this.loadVideos();
   }

   async loadVideos(){
    this.videos = [
      { Id: 1,
        Cover: await this.convertDummyImage(),
        clipURL: '../assets/images/film.png',
        Title: 'video 1',
        Rating: 4
      },
      { Id: 2,
        Cover: await this.convertDummyImage(),
        clipURL: '../assets/images/film.png',
        Title: 'video 2',
        Rating: 4
      },
      { Id: 3,
        Cover: await this.convertDummyImage(),
        clipURL: '../assets/images/film.png',
        Title: 'video 3',
        Rating: 4
      },
      { Id: 4,
        Cover: await this.convertDummyImage(),
        clipURL: '../assets/images/film.png',
        Title: 'video 4',
        Rating: 4
      },
   ];
  }

  async convertDummyImage() : Promise<ImageBitmap>{
    let base64Image = 'data:image/png;base64,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';
    let blob = this.base64ToBlob(base64Image);
    return await createImageBitmap(blob);
  }

  base64ToBlob(dataUrl: string): Blob {
    const arr = dataUrl.split(',');
    const mime = arr?.[0]?.match(/:(.*?);/)?.[1];
    const blobStr = atob(arr[1]);
    let blobLength = blobStr.length;
    const u8arr = new Uint8Array(blobLength);

    while (blobLength--) {
        u8arr[blobLength] = blobStr.charCodeAt(blobLength);
    }

    return new Blob([u8arr], {type: mime});
  }

  async getAllVideos(): Promise<Video[]>{
    await this.videosLoaded;
    return this.videos;
  }
}