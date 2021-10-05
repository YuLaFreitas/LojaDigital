import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  private aba: string = "home";
  ngOnInit() {
     // this.getTitulo()
  }

  getTitulo(){
      return this.aba;
  }
  setTitulo(word: string){
    this.aba = word;
  }

}
