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
        this.selectedPerson = this.persServ.getPersonById(p.get('id'));

      }
    )
  }

  deleteSelectedPerson() {
    if(confirm('Voulez-vous vraiment supprimer cette personne ?')) {
      this.persServ.deletePerson(this.selectedPerson);
      this.router.navigateByUrl("/cv");

    }

  }

}
