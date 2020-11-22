import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sectionDefault = "dsen"
  resumeDefault = "Je suis passionné par la programmation..."
  constructor() { }

  ngOnInit() {
  }

  showForm(f) {
    console.log(f);
    
  }

}
