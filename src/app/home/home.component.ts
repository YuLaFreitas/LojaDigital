import { Observable } from 'rxjs';
import { ConnService } from './conn.service';
import { Component, OnInit } from '@angular/core';
import { ResponseUser, User } from './data.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inEditar = false;
  retorno: any;

  constructor(
    private lista: ConnService,
    private router: Router,
    private rota: ActivatedRoute

          ){  

           }

  ngOnInit(){ 
  
    this.lista.getUsers() 
    .subscribe(
      res => this.retorno = res
    ); 
  }

  pessoa: User[] = [];

  editar(id: string){
      
      //const vlr = "first_name: "+ this.pessoa.map.name;


      //console.log(vlr);

    //this.lista.setEditar(id, vlr );
    
    //console.log(id, valor);
    
    this.lista.setAtualizar();  
  }

  novo(){
    
    //this.lista.setEditar(id, valor)

  }
 
  atualizar(id: string){
    //this.lista.setEditar(id, valor)
                          //Array da rota, a id da lista
    this.router.navigate(['/editar', id], {relativeTo: this.rota});
    console.log(id);
} 
 
  remover(id: string){
    //this.lista.setEditar(id, valor)

}

buscar(palavra: string){
    //this.lista.setEditar(id, valor)

}

ngOnDestroy() {
    
  }
  
}
