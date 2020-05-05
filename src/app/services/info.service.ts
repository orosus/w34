import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: InfoPage = {};
  team: any[] = [];
  home: any[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPage listo');
    this.loadInfo();
    this.loadTeam();
    this.loadHome();

  }
  private loadInfo(){
    // Leer el archivo JSON local
    this.http.get('https://wanderlust-34.firebaseio.com/info.json')
    .subscribe( (resp: InfoPage) => {
      this.loaded = true;
      this.info = resp;
      // console.log(resp);
    });
  }

  private loadTeam(){
    // Leer el archivo JSON de Firebase
    this.http.get('https://wanderlust-34.firebaseio.com/team.json')
    //this.http.get('assets/data/team.json')
    .subscribe( (resp: any[]) => {
      this.team = resp;
      // console.log(resp);
    });
  }

  private loadHome(){
    this.http.get('https://wanderlust-34.firebaseio.com/home.json')
    .subscribe( (resp: any[]) => {
      this.home = resp;
      // console.log(resp);
    });
  }
}
