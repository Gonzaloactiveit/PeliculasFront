import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router, RouterLink} from '@angular/router';
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
  styleUrls: ['./rick.component.scss']
})
export class RickComponent implements OnInit {

  personajes: PersonajesI[] = [] ;

  // pageNumber: number = 0;

  pageNumber = JSON.parse(localStorage.getItem('num')!);

  informacion: InfoI[] =[]
  
  showFiller = false;

  listaLocation: location[] = [];

  title = 'Card View';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  constructor(private api:ServicioService, private router:Router) { };

  
  ngOnInit(): void {
    this.personajes = [];
    
    this.api.getPersonajePagina(localStorage.getItem('num')!).subscribe(data =>{
      console.log(data);
      this.personajes = data.results;
      this.informacion = data.info;
      // this.listaLocation = this.personajes.location;
      console.log(this.personajes);
    })
    
  };

  siguientePagina(){
    if(this.pageNumber == '0' ){
      this.pageNumber = this.pageNumber + 2;
      localStorage.setItem('num', JSON.stringify(this.pageNumber));
      console.log(localStorage.getItem('num'));
    }else{
      this.pageNumber = this.pageNumber + 1;
      localStorage.setItem('num', JSON.stringify(this.pageNumber));
      console.log(localStorage.getItem('num'));
    }
      
      
  } 

  paginaAnterior(){
    if(localStorage.getItem('num') != '0'){
      this.pageNumber= this.pageNumber -1
      localStorage.setItem('num', JSON.stringify(this.pageNumber));
      console.log(localStorage.getItem('num'));
    }
    else{
      RouterLink: "/home"
    }
  }


}
