import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  name : string = "Slim"

  @Output() toParent = new EventEmitter();

  @Input() myColor = "red";
  
  hd = false;
  constructor() { }

  ngOnInit() {
  }

  traitement() {
    alert('Vous avez cliqué !')
  }

  sendMsg() {
    this.toParent.emit('Message envoyé par le fils');
  }

}
