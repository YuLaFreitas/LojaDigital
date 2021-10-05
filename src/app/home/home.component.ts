import { ConnService } from './conn.service';
import { Component, OnInit } from '@angular/core';
import { ResponseUser, User } from './data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
   retorno: ResponseUser = null;

  constructor(
    private lista: ConnService,
    //public retorno: ResponseUser
          ){}

  ngOnInit(){ 
  
    this.lista.getUsers()  
    .subscribe(res => this.retorno = res); 
  }
  
}
