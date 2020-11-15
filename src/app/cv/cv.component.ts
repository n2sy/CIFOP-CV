import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 12, "Etudiant", "bart.jpg"),
    new Personne(3, "homer", "simpson", 80, "Ingénieur", "homer.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
