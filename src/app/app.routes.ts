import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VideoCategoryComponent } from './components/video-category/video-category.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'videos', component: VideosComponent },
    { path: 'videocategories', component: VideoCategoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
