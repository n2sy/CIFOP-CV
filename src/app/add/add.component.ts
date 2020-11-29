import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private persServ : ListPersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  submitPerson(newPerson) {
    // this.persServ.addPerson(newPerson);
    // this.router.navigateByUrl("/cv")
    this.persServ.addPersonAPI(newPerson).subscribe(
      (reponse) => {
        this.router.navigateByUrl("/cv")
      },
      (error) => {
        console.log("Error with AddPerson()");
        
      }
    )

  }

}
