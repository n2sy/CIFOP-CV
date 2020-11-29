import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filtredPersons : Personne[] = [];
  constructor(private persServ : ListPersonneService,
    private router: Router) { }

  ngOnInit() {
  }

  searchPerson(inputName) {
    this.persServ.getPersonsByName(inputName).subscribe(
      (reponse) => {
        this.filtredPersons = reponse;
      }
    )

  }

  goToDetails(id) {
    this.filtredPersons = [];
    this.router.navigate(['/cv', id]);
  }

}
