import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import {Router} from '@angular/router';
import {PersonajesI} from '../modelos/personajes.interface'
import{ResI} from '../modelos/res.interface'

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
