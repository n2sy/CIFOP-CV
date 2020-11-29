import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  notAffiche : boolean = false;
  sectionDefault = "dsen"
  resumeDefault = "Je suis passionné par la programmation..."
  constructor(private authServ : AuthService,
    private router : Router) { }

  ngOnInit() {
  }

  showForm(f) {
    console.log(f);
    
  }

  submitCredentials(f) {
    this.authServ.login(f).subscribe(
      (reponse) => {
        let myToken = reponse['id'];
        localStorage.setItem('token', myToken);
        this.notAffiche = false;
        this.router.navigateByUrl("/cv")

      },
      (error) => {
        console.log("Erreur d'authentification");
        this.notAffiche = true;

      }
    )
  }

}
