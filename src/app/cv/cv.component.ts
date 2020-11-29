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
    //this.listPersonne = this.persServ.getAllPersons()
    this.persServ.getAllPersonsAPI().subscribe(
      (reponse) => {
        this.listPersonne = reponse;
      },
      (error) => {
        console.log("Error with getAllPerson()");
        
      }
    )
  }

  RecupPerson(p) {
    this.selectedPersonne = p;

  }




}
