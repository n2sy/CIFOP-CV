import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  selectedPerson : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private persServ: ListPersonneService) { }

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    
    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
        this.persServ.getPersonByIdAPI(p.get('id')).subscribe(
          (reponse) => {
            this.selectedPerson = reponse
          },
          (error) => {
            console.log("Error with getPersonById");  
          }
        )

      },
      (error) => {
        console.log("Error with ParamMap");
        
      }
    )
  }

  deleteSelectedPerson() {
    if(confirm('Voulez-vous vraiment supprimer cette personne ?')) {
      //this.persServ.deletePerson(this.selectedPerson);
      //this.router.navigateByUrl("/cv");
      this.persServ.deletePersonAPI(this.selectedPerson.id).subscribe(
        (reponse) => {
          this.router.navigateByUrl("/cv");
        },
        (error) => {
          console.log("Error with deletePersonAPI");
          
        }
      )

    }

  }

  goToUpdate() {
    this.router.navigate(['cv', 'edit', this.selectedPerson.id])
  }

}
