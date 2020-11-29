import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = "http://localhost:3000/api/Users/login";

  constructor(private http: HttpClient) { }

  login(p) {
    return this.http.post(this.link, p)
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged() {
    let myToken = localStorage.getItem('token');
    if(myToken)
      return true;
    else
      return false;
  }
}
