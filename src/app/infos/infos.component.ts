import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListPersonneService } from '../list-personne.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,
    private persServ: ListPersonneService) { }

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.params['id'];
    // console.log(id);
    
    
  }

}
