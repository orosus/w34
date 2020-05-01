import { Component } from '@angular/core';
import { InfoService } from './services/info.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'W34';

  constructor( public infoService: InfoService,
               public postsService: PostsService ){

  }
}
