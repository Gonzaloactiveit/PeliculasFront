import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodioComponent } from './episodio/episodio.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { RickComponent } from './rick/rick.component';

const routes: Routes = [
  {path: 'home', component: RickComponent},
  {path: 'home/page/:num', component: RickComponent},
  {path: 'character/:id', component: PersonajeComponent},
  {path: 'episode', component: EpisodioComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  
 }
