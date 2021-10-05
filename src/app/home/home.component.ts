import { Observable } from 'rxjs';
import { ConnService } from './conn.service';
import { Component, OnInit } from '@angular/core';
import { ResponseUser, User } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  retorno: any;

  constructor(private lista: ConnService
          ){   }

  ngOnInit(){ 
  
    this.lista.getUsers() 
    .subscribe(
      res => this.retorno = res
    ); 
  }
  novo(){

  }
 
  atualizar(){

} 
 
  remover(id: string){

}

buscar(palavra: string){

}
ngOnDestroy() {
    
  }
  
}
