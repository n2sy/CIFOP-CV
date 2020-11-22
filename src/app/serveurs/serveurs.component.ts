import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServeurService } from '../list-serveur.service';

@Component({
  selector: 'app-serveurs',
  templateUrl: './serveurs.component.html',
  styleUrls: ['./serveurs.component.css']
})
export class ServeursComponent implements OnInit {
  listServeurs = [];
  constructor(private router : Router,
    private serveurServ : ListServeurService) { }

  ngOnInit() {
    this.listServeurs = this.serveurServ.getAllServeurs();
  }

  // goToDetails(id) {
  //   this.router.navigate(['serveurs', id]);

  // }

}
