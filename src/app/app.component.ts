import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CIFOP-CV';

  traitementDuParent(msg) {
    alert('Messagr reçu par le parent : ' + msg);
  }
}
