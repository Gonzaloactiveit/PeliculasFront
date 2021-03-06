import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodeI } from '../modelos/episodio.interface';
import { ServicioService } from '../servicio.service';

export interface Lista{

  id: number;
  name:String;

}

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EpisodioComponent implements OnInit {
 
  episode: EpisodeI[] = [];
  listaCharacter: Lista[] = [];
  // localStorage.setItem('numEp',JSON.stringify(1));
  
  pageNumber = JSON.parse(localStorage.getItem('numEp')!);

  constructor(private route:ActivatedRoute, private api:ServicioService) { }

  ngOnInit(): void {
    this.episode = [];
    
    this.api.getEpisodePagina(localStorage.getItem('numEp')!).subscribe(data =>{
      console.log(data);
      this.episode = data.results;
      console.log(this.episode);
    })
  }

  onClick(ep: any){

    

    this.listaCharacter = [];

      ep.characters.forEach((character: any) =>{
        this.api.getCharacterByURL(character).subscribe(char =>{
          this.listaCharacter.push(char);
          console.log(this.listaCharacter)
        });
        
      });
      
  }

  columnsToDisplay: string[] = ['id','name'];
  expandedElement: EpisodeI | undefined;

  siguientePagina(){

    if(this.pageNumber == '0' ){
      this.pageNumber = this.pageNumber + 2;
      localStorage.setItem('numEp', JSON.stringify(this.pageNumber));
      console.log(localStorage.getItem('numEp'));
    }else{
      this.pageNumber = this.pageNumber + 1;
      localStorage.setItem('numEp', JSON.stringify(this.pageNumber));
      console.log(localStorage.getItem('numEp'));
    }

} 

paginaAnterior(){
  if(localStorage.getItem('numEp') != '0'){
    this.pageNumber= this.pageNumber -1
    localStorage.setItem('numEp', JSON.stringify(this.pageNumber));
    console.log(localStorage.getItem('numEp'));
  }
  else{
    RouterLink: "/home"
  }
}
}
