import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatedPerson : Personne;
  constructor(private activatedRoute : ActivatedRoute, 
    private router : Router,
    private listPersServ : ListPersonneService
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(

      (p) => {
        
        this.listPersServ.getPersonByIdAPI(p.get('id')).subscribe(
          (reponse) => {
            this.updatedPerson = reponse;
          },
          (error) => {
            console.log("Error with getPersonById");
            
          }
        )

      },
      (error) => {
        console.log("Erreur with the route parameters");
        
      }
    )
  }
  submitPerson() {
    //this.listPersServ.updatePerson(this.updatedPerson);
    //this.router.navigateByUrl('/cv')
    this.listPersServ.updatePersonAPI(this.updatedPerson).subscribe(
      (reponse) => {
        this.router.navigateByUrl('/cv')
      },
      (error) => {
        console.log("Error with updatePerson()");
        
      }
    )

  }

}
