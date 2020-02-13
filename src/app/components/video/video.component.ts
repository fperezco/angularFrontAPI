import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
  }

}
