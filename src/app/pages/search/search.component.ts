import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public postsService: PostsService ) { }

  ngOnInit(): void {

    this.route.params
        .subscribe( paramsURL => {
          console.log(paramsURL.term);
          this.postsService.searchPost( paramsURL.term );
        });

  }

}
