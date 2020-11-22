import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServeurService } from 'src/app/list-serveur.service';

@Component({
  selector: 'app-detail-serveur',
  templateUrl: './detail-serveur.component.html',
  styleUrls: ['./detail-serveur.component.css']
})
export class DetailServeurComponent implements OnInit {
  selectedServeur ;
  affiche : boolean = false;
  constructor(private activatedRoute : ActivatedRoute,
    private serveurSrv : ListServeurService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (p : ParamMap) => {
        this.selectedServeur = this.serveurSrv.getSereurById(p.get('id'))

      }
    )

    this.activatedRoute.queryParams.subscribe(
      (q) => {
        this.affiche = q['allowEdit'] == '1' ? true : false;
      }
    )
  }

}
