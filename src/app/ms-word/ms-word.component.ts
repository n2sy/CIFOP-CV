import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  bgColor : string;
  myColor : string;
  size : string;
  myFont : string;
  fonts = ['', 'Impact', 'Verdana', 'Arial'];

  constructor() { }

  ngOnInit() {
  }

  modifierSize(newSize) {
    this.size = newSize + 'px';
  }

}
