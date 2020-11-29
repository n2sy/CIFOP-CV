import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RhRecrueService {
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg", "candidat"),
    new Personne(2, "bart", "simpson", 12, "Etudiant", "bart.jpg", "recrue"),
    new Personne(3, "homer", "simpson", 80, "Ingénieur", "homer.jpg", "refuse"),
    new Personne(4, "slim", "khammassi", 210, "architecte", "marge.jpg", "recrue"),
    new Personne(5, "iheb", "cherif", 12, "Etudiant", "bart.jpg", "candidat"),
    new Personne(6, "mohamed", "akrich", 80, "Ingénieur", "homer.jpg", "refuse")
  ];
  constructor() { }

  getPersonsByStatus(stat) {
    return this.listePersonne.filter((p) => p.status == stat)
  }
}
