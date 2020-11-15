import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePerson : Personne[];
  @Output() sendPers = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendPersToCv(pers) {
    this.sendPers.emit(pers)

  }

}
