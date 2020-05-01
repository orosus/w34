import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  loading = true;
  product: Product[] = []; // cambiar nombre a products
  productsFiltered: Product[] = [];
  // --------------------------------------
  constructor( private http: HttpClient) {
    this.loadPosts();
  }
  // --------------------------------------
  private loadPosts() {

    return new Promise( ( resolve, reject ) => {

      this.http.get('assets/data/productos_idx.json')
        .subscribe( (resp: Product[]) => {
          console.log(resp);
          this.product = resp;
          this.loading = false;
          resolve();
        });

    });

  } // Cierra loadPosts

  // metodo para conseguir el producto del HTTP usado en recipe.component.ts
  getProducto( id: string ){
    return this.http.get(`https://orosuswebangular.firebaseio.com/productos/${ id }.json`);
  }


  // metodo para buscar productos con el termino de busqueda usado en search.component.ts
  searchProduct( term: string ) {

    if ( this.product.length === 0 ) {
      // cargar productos
      this.loadPosts().then( () => {
        // esto se ejecuta despues de cargar productos
        // aplicar filtro
        this.filterProducts( term );
      });
    } else {
      // aplicar filtro
      this.filterProducts( term );
    }

  } // Cierra metodo searchProduct

  // funcion para aplicar filtro a los productos con el termino de busqueda
  private filterProducts( term: string ) {
    console.log(this.product);
    this.productsFiltered = []; // purgamos el array para una nueva busqueda
    term = term.toLocaleLowerCase();
    // rellenamos productos con productos filtrados
    this.product.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( term ) >= 0 || tituloLower.indexOf( term ) >= 0 ) {
          this.productsFiltered.push( prod );
      }
    });
  }


} // Cierra ProductosService
