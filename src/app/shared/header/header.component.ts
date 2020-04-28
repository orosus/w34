import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoService: InfoService,
               private router: Router) { }

  ngOnInit(): void {
  }

  // metodo para buscar productos usado en el servicio Products
  searchProduct( term: string ) {
    if ( term.length < 1 ) {
      return;
    }
    this.router.navigate(['/search', term]);
    console.log(term);
  }

}
