import { ResponseUser, User } from './data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  private URL = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUsers(){
      return this.http.get<ResponseUser[]>(this.URL);
  }
}
