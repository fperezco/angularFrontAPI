import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../Interfaces/video.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  baseUrl = 'http://127.0.0.1:8000/api/v1';

  constructor( private http: HttpClient) { }

  getAllVideos(): Respuesta{
    return this.http.get(`${this.baseUrl}/videos/`);
  }

}
