import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
 // { path: 'item/:id', component: ItemComponent},
 // { path: 'search/:term', component: SearchComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  /**
   * si activamos useHash, en la URL saldrá server/#/home
   * y asi lo que pone despues de # son modulos de ruta de la app
   * así el servidor ya no buscara /home como una ruta de carpeta en el server
   */
  imports: [RouterModule.forRoot(appRoutes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
