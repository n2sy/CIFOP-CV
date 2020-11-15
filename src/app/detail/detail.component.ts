import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personSelected : Personne;
  constructor() { }

  ngOnInit() {
  }

}
