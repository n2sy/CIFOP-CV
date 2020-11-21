import { Component, OnInit } from '@angular/core';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers : []
})
export class CvComponent implements OnInit {
  selectedPersonne : Personne;
  listPersonne : Personne[];
  constructor(private persServ : ListPersonneService) { }

  ngOnInit() {
    this.listPersonne = this.persServ.getAllPersons()
  }

  RecupPerson(p) {
    this.selectedPersonne = p;

  }

  addPerson() {
    this.persServ.addPerson();
    console.log(this.persServ.getAllPersons());
    
  }



}
