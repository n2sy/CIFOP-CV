import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListPersonneService } from '../list-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
  //providers : [ListPersonneService]
})
export class ListeComponent implements OnInit {
  listePerson : Personne[];
  @Output() sendPers = new EventEmitter();
  constructor(private persServ : ListPersonneService) { }

  ngOnInit() {
    this.persServ.getAllPersonsAPI().subscribe(
      (reponse) => {
        this.listePerson = reponse;
      },
      (error) => {
        console.log("Error with getAllPerson()");
        
      }
    )
  }

  sendPersToCv(pers) {
    this.sendPers.emit(pers)

  }

  showList() {
    console.log(this.persServ.getAllPersons());
    
  }

}
