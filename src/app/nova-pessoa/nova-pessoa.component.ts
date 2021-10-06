import { ResponseUser } from './../home/data.model';
import { ConnService } from './../home/conn.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.scss']
})
export class NovaPessoaComponent implements OnInit {

form: any;//FormGroup | undefined;

  constructor(
    private fb: FormBuilder, 
    private service: ConnService,
    private route: ActivatedRoute
    ) { }

  onSubmit(){
    //if(this.form.vald){
      this.service.setNovo(this.form.value).subscribe(suc => console.log(suc))
      console.log(this.form.value)
      //console.log('submit')
    //}
  }
  onCancelar(){

  }

  ngOnInit(): void {

this.route.params
.pipe(
  map((params: any) => params['id']),
  switchMap(id => this.service.loadById(id))
)
.subscribe(  
//(id) => {
  (pass) => {
  //const pessoa$ = this.service.loadById(id);
  //pessoa$.subscribe(  
    //pess => {
        this.updatForm(pass); //console.log(pess)}
    //)
  }
)
//  (params: any) => {const id = params['id']; const pessoa$ = this.service.loadById(id);
  //  pessoa$.subscribe(  pess => {  this.updatForm(pess); console.log(pess)})}
//)

    this.form = this.fb.group({
      id: [null],
      nome: [null],
      suporte: [null]
    })
  }

  updatForm(lista: any) { 
      this.form.patchValue({
        id: lista.data.id,
        nome: lista.data.last_name,
        suporte: lista.support.url
      })
      console.log(lista)
  }

}

