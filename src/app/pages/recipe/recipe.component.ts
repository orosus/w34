import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { ProductPage } from '../../interfaces/product-page.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  product: ProductPage;
  id: string;

  constructor( private route: ActivatedRoute,
               public postsService: PostsService ) { }

  ngOnInit(): void {
    this.route.params
        .subscribe( paramsURL => {
          // console.log(paramsURL.id);
          this.postsService.getProducto(paramsURL.id)
              .subscribe( (product: ProductPage) => {
                // console.log(product);
                this.product = product;
                this.id = paramsURL.id;
              });
        });
  }

}
