import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() onePerson : Personne;
  constructor() { }

  ngOnInit() {
  }

}
