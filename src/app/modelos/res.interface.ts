import {PersonajesI} from '../modelos/personajes.interface'
import {InfoI} from '../modelos/info.interface'
import { EpisodeI } from './episodio.interface'


export interface ResI{

    info: InfoI[],
    results: PersonajesI[]
    
}

export interface ResEp{

    info: InfoI[],
    results: EpisodeI[]

}