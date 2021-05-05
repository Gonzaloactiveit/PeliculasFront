import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonajesI} from '../modelos/personajes.interface'
import{ResI} from '../modelos/res.interface'
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EpisodeI } from '../modelos/episodio.interface';
import { MatTableDataSource } from '@angular/material/table';

export interface Location{
  name: String;
  url: String;
}

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss']
})
export class PersonajeComponent implements OnInit {
  personaje: PersonajesI[] = [];
  episodeList: EpisodeI[] = [];
  location: Location[] = [];

  displayedColumns: string[] = ['id','name', 'air_date', 'episode'];

  dataSource = new MatTableDataSource();

  constructor(private route:ActivatedRoute, private api:ServicioService) { }

  showFiller = false;

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params) =>{
      // const id = params['id'];
      const {id} = params;
      this.api.getPersonajeById(id).subscribe(data => {
        console.log(data);
        this.personaje = [data];
        // this.location = [data.location];
        this.personaje.forEach(({episode}: any) =>{
          
            episode.forEach((e: any) =>{
              
              this.api.getEpisodeByURL(e).subscribe(ep =>{
                this.episodeList.push(ep);
                this.dataSource.data = this.episodeList.sort((a: any,b: any)=>a-b);
              
                
              })
            })
            
        })
      })
    })
  } 

  // onGoBack():void{
  //   this.location.back();
  // }

}
