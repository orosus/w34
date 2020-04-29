import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  info: InfoPage = {};
  team: any[] = [];
  cargada = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPage listo');
    this.loadInfo();
    this.loadTeam();

  }
  private loadInfo(){
    // Leer el archivo JSON local
    this.http.get('assets/data/data-page.json')
    .subscribe( (resp: InfoPage) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
    });
  }

  private loadTeam(){
    // Leer el archivo JSON de Firebase
    // this.http.get('https://orosuswebangular.firebaseio.com/equipo.json')
    this.http.get('assets/data/team.json')
    .subscribe( (resp: any[]) => {
      this.team = resp;
      // console.log(resp);
    });
  }
}
