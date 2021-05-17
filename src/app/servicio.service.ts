import { Injectable } from '@angular/core';
import { PersonajesI } from '../app/modelos/personajes.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ResEp, ResI } from '../app/modelos/res.interface'
import { EpisodeI } from './modelos/episodio.interface';
// import { get } from 'node:http';
// import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url:string = 'https://rickandmortyapi.com/';




  constructor(private http:HttpClient) { }

  getPersonaje():Observable<ResI>{

    let getAll = this.url + "api/character"

    return this.http.get<ResI>(getAll);

  }

  getPersonajePagina(page: String):Observable<ResI>{

    let getPage = this.url + "api/character/?page="+ page;

    return this.http.get<ResI>(getPage)
  }

  getEpisodePagina(page: String):Observable<ResEp>{

    let getPage = this.url + "api/episode/?page="+ page;

    return this.http.get<ResEp>(getPage)
  }

  getPersonajeById(id: number):Observable<PersonajesI>{

    let getById = this.url +"api/character/" + id;

    return this.http.get<PersonajesI>(getById);

  }

  getEpisodeByURL(urls: any):Observable<EpisodeI>{
    console.log(urls);
    return this.http.get<EpisodeI>(urls);
  }

  getEpisode():Observable<ResEp>{

    let getAll = 'https://rickandmortyapi.com/api/episode';

    return this.http.get<ResEp>(getAll);

  }

  getCharacterByURL(urls: any):Observable<PersonajesI>{
    
    return this.http.get<PersonajesI>(urls);
  }


}
