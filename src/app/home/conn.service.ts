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

  getUsers(){
      return this.http.get<ResponseUser[]>(this.URL);
  }

  loadById(id: any){
    //console.log(this.loadById)
      return this.http.get<ResponseUser>(this.URL+ '/?id=' + id);
      //this.http.get(this.URL+'?id='+ id).pipe()
  }

  /*setEditar(id: string, valor: string){
    
    return this.http.put(this.URL+"/?id="+ id,valor );
  }*/
  setEditar(id: string){
    
    return this.http.put(this.URL+"/?id="+ id, Response.name );
  }

  setNovo(valor: string){
    return this.http.post(this.URL,valor ).pipe();

  }
 
  setAtualizar(){
    return this.http.get(this.URL+"/?id=" + 1);

} 
 
  setRemover(id: string){
    return this.http.delete(this.URL +"/"+ id  );
}

setBuscar(palavra: string, item: string){
  return this.http.put(this.URL,"/"+item+"?="+ palavra );

}
}
