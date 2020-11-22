import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListServeurService {
  listServeurs = [
    {
      id : 1,
      name : "Slim Serveur",
      status : "online"
    },
    {
      id : 2,
      name : "Khaoula Serveur",
      status : "offline"
    },
    {
      id : 3,
      name : "Iheb Serveur",
      status : "online"
    }
  ];
  constructor() { }

  getAllServeurs() {
    return this.listServeurs;
  }

  getSereurById(id) {
    return this.listServeurs.find(( p => p.id == id));

  }
}
