import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class HelperService {

    pageNumber: number = 0;
      
    siguientePagina(page: number){
        this.pageNumber = page;
        this.pageNumber = this.pageNumber + 1;
        localStorage.setItem('num', JSON.stringify(this.pageNumber));
    }

    paginaAnterior(page: number){
        
    }


  }