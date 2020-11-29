import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListRecrueService } from './list-recrue.service';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListPersonneService {
  link = "http://localhost:3000/api/personnes"
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "Enseignant"),
    new Personne(2, "bart", "simpson", 12, "Etudiant", "bart.jpg"),
    new Personne(3, "homer", "simpson", 80, "Ingénieur", "homer.jpg")
  ];
  constructor(private recrueServ : ListRecrueService,
    private http : HttpClient) { }

  getAllPersons() {
    return this.listePersonne;
  }

  getAllPersonsAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link)

  }

  addPerson(newP) {
    newP.id = this.listePersonne[this.listePersonne.length - 1].id + 1;
    this.listePersonne.push(newP)
    
  }

  addPersonAPI(newP) {
    let xxToken = localStorage.getItem('token');
    if(xxToken) {
      let params = new HttpParams().set('access_token', xxToken);
      return this.http.post(this.link, newP, {params});
    }
    return this.http.post(this.link, newP);
  }

  getPersonById(id) {
    return this.listePersonne.find(( p => p.id == id));
  }

  getPersonByIdAPI(id) : Observable<Personne> {
    //return this.http.get<Personne>(this.link+"/"+id)
    return this.http.get<Personne>(`${this.link}/${id}`);

  

  }

  deletePerson(pers) {
    let i = this.listePersonne.indexOf(pers);
    this.listePersonne.splice(i, 1);
  }

  deletePersonAPI(id) {
    return this.http.delete(`${this.link}/${id}`)
  }

  updatePerson(uPerson) {
    let p = this.getPersonById(uPerson['id']);
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = uPerson;

  }

  updatePersonAPI(uPerson) {

    return this.http.put(`${this.link}/${uPerson.id}`, uPerson);

  }

}
