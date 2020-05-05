import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public infoService: InfoService,
               private router: Router) { }

  ngOnInit(): void {
  }

}
