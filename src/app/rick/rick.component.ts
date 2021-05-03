import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router} from '@angular/router';
import {PersonajesI} from '../modelos/personajes.interface'
import {InfoI} from '../modelos/info.interface'
import{ResI} from '../modelos/res.interface'

export interface location{
  name: String;
  url: String;
}


@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrls: ['./rick.component.css']
})
export class RickComponent implements OnInit {

  personajes: PersonajesI[] = [] ;

  informacion: InfoI[] =[]
  
  showFiller = false;

  listaLocation: location[] = [];

  constructor(private api:ServicioService, private router:Router) { };

  ngOnInit(): void {
    this.api.getPersonaje().subscribe(data =>{
      console.log(data);
      this.personajes = data.results;
      this.informacion = data.info;
      // this.listaLocation = this.personajes.location;
      console.log(this.personajes);
    })
  };


}
