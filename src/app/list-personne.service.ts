import { Injectable } from '@angular/core';
import { ListRecrueService } from './list-recrue.service';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonneService {
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant"),
    new Personne(2, "bart", "simpson", 12, "Etudiant", "bart.jpg"),
    new Personne(3, "homer", "simpson", 80, "Ingénieur", "homer.jpg")
  ];
  constructor(private recrueServ : ListRecrueService) { }

  getAllPersons() {
    return this.listePersonne;
  }

  addPerson() {
    this.listePersonne.push(new Personne(1, "New", "Person", 35, "Enseignant"))
  }

  getPersonById(id) {
    return this.listePersonne.find(( p => p.id == id));
  }

  deletePerson(pers) {
    let i = this.listePersonne.indexOf(pers);
    this.listePersonne.splice(i, 1);
  }

}
