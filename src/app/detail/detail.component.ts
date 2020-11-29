import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListRecrueService } from '../list-recrue.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personSelected : Personne;
  constructor(private recrueServ : ListRecrueService,
    private router : Router) { }

  ngOnInit() {
  }

  RecruterPers() {
    this.recrueServ.addRecrue(this.personSelected);
  }

  goToDetails() {
    this.router.navigate(['cv', this.personSelected.id])
  }

}
