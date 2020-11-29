import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { RhRecrueService } from '../rh-recrue.service';

@Component({
  selector: 'app-rh-manager',
  templateUrl: './rh-manager.component.html',
  styleUrls: ['./rh-manager.component.css']
})
export class RhManagerComponent implements OnInit {
  candidatList : Personne[];
  recrueList : Personne[];
  refuseList : Personne[];

  affiche : boolean = false;
  displayValue : string = "none";

  constructor(private recrueServ : RhRecrueService) { }

  ngOnInit() {
    this.candidatList = this.recrueServ.getPersonsByStatus("candidat");
    this.recrueList = this.recrueServ.getPersonsByStatus("recrue");
    this.refuseList = this.recrueServ.getPersonsByStatus("refuse");
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    let selectedPerson = event.item.data;
    selectedPerson["status"] = event.container.element.nativeElement.classList[0];
    this.recrueServ.updatePersonByStatus(selectedPerson);
  }

  showModal() {
    this.affiche = true;
    this.displayValue = "block"
  }

  hideModal() {
    this.affiche = false;
    this.displayValue = "none"
  }

  submitPerson(n, p) {
    this.recrueServ.addPerson(new Personne(10, p, n, 33, "Sans emploi", "nidhal.jpg", "candidat"));
    this.hideModal();
    this.ngOnInit();

  }

}
