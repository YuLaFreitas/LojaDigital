import { ResponseUser, User } from './data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnService {

  private URL = "https://reqres.in/api/users";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUser> {
      return this.http.get<ResponseUser>(this.URL);
  }
}
