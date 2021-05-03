import { Injectable } from '@angular/core';
import { PersonajesI } from '../app/modelos/personajes.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ResI } from '../app/modelos/res.interface'
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

  getPersonajePagina(page: number):Observable<ResI>{

    let getPage = this.url + "api/character/?page="+ page;

    return this.http.get<ResI>(getPage)
  }

  getPersonajeById(id: number):Observable<ResI>{

    let getById = this.url +"api/character/" + id;

    return this.http.get<ResI>(getById);

  }
}
