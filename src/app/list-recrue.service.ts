import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListRecrueService {
  listRecrue : Personne[] = [];
  constructor() { }

  addRecrue(pers) {
    if(this.listRecrue.indexOf(pers) < 0)
     this.listRecrue.push(pers)
    else 
      alert("Cette personne a déjà été recruté !")
  }

  getAllRecrues() {
    return this.listRecrue;
  }
}
