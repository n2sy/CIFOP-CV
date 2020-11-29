import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  link = "https://jsonplaceholder.typijbjbkjjblljcode.com/users";
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get(this.link).subscribe(
      (reponse) => {
        console.log(reponse);
        
      },
      (error) => {
        console.log("Erreur avec le faux API !!!");
        
      },
      () => {
        console.log("Flux terminée !");
        
      }
    )
  }

}
