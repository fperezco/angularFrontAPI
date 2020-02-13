import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from 'src/app/Interfaces/video.interface';
import { Respuesta } from '../../Interfaces/video.interface';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  loading = true;
  videosDisponibles: Video[] = [];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.getAllVideos();

  }

  getAllVideos(){
    this.loading = true;
    this.videoService.getAllVideos()
    .subscribe ( resp => {
      console.log(resp.data);
      for (const res of resp.data) {
          let video: Video = {};
          video.id = res.id;
          video.name = res.name;
          video.url = res.url;
          video.picture = res.picture;
          video.description = res.description;
          this.videosDisponibles.push(video);
      }
      this.loading = false;
      console.log("las videos son");
      console.log(this.videosDisponibles);
    });
  }

}
