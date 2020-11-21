import { Component, OnInit } from '@angular/core';
import { ListRecrueService } from '../list-recrue.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  listRecrutes : Personne[] = [];
  constructor(private recrueServ : ListRecrueService) { }

  ngOnInit() {
    this.listRecrutes = this.recrueServ.getAllRecrues();
  }

}
