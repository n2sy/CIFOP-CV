import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePerson : Personne[];
  constructor() { }

  ngOnInit() {
  }

}
