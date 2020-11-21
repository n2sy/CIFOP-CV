import { Component, OnInit } from '@angular/core';
import { Server } from '../model/server';

@Component({
  selector: 'app-manager-servers',
  templateUrl: './manager-servers.component.html',
  styleUrls: ['./manager-servers.component.css']
})
export class ManagerServersComponent implements OnInit {
  selectedStatus : string = "";
  listServers : Server[] = [
    new Server('Production Server', 'medium', 'critical', new Date(2019, 6, 20)),
    new Server('Testing Development Server', 'small', 'stable', new Date(2018, 3, 20)),
    new Server('Development Server', 'large', 'offline', new Date(2017, 1, 22)),
    new Server('Nidhal Server', 'medium', 'stable', new Date(2019, 3, 11))  ]
  
    constructor() { }

  ngOnInit() {
  }

  setClass(s : Server) {
    return {
      'list-group-item-success' : s.status == 'stable',
      'list-group-item-warning' :  s.status == 'offline',
      'list-group-item-danger' :  s.status == 'critical'
    }

  }

  addServer() {
    this.listServers.push(
      new Server('New Server', 'medium', 'stable', new Date(2019, 3, 11))
    )
  }

}
