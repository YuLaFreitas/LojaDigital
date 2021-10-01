import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  fotos: String[] = [
    "https://thumbs.dreamstime.com/b/texture-18610242.jpg",
    "https://thumbs.dreamstime.com/b/texture-186102585.jpg",
    "https://thumbs.dreamstime.com/b/texture-196152585.jpg",
    "https://thumbs.dreamstime.com/b/texture-196192585.jpg",
    "https://thumbs.dreamstime.com/b/texture-196102785.jpg",
    "https://thumbs.dreamstime.com/b/texture-196105785.jpg",    
    "https://thumbs.dreamstime.com/b/texture-196172785.jpg",
    "https://thumbs.dreamstime.com/b/texture-196172780.jpg",
    "https://thumbs.dreamstime.com/b/texture-196972085.jpg",
    "https://thumbs.dreamstime.com/b/texture-195972085.jpg",
    "https://thumbs.dreamstime.com/b/texture-196971085.jpg",
    "https://thumbs.dreamstime.com/b/texture-196972075.jpg",
    "https://thumbs.dreamstime.com/b/texture-196972084.jpg",
    "https://thumbs.dreamstime.com/b/texture-206972085.jpg",
    "https://thumbs.dreamstime.com/b/texture-206970085.jpg",
    "https://thumbs.dreamstime.com/b/texture-206970005.jpg" 
  ]

  teste: boolean[] = 
  [
    //0     1       2       3     4     5     6         7  
    false, false, false, false, false, false, false, false
  ]

  valor: number = 0;

  clicar(n: number){
    //this.teste = this.teste? false: true;
        this.valor= n != 15? this.valor ++:0;
        console.log(this.valor)
        return this.valor;
  }


  fotoTeste: string = "vazio";
  num: any = false;  
  guardar(foto: string, n: number){
    
    if(this.fotoTeste == "vazio" || this.num == false){
      this.fotoTeste = foto;
      this.num = n;
      console.log("VAZIO", this.fotoTeste, n);

    }
    else 
    if(this.num != n){

      if(this.num <= 7){
        this.teste[this.num] = this.comparar(foto, this.num);
        console.log("numero menor", this.num, n, this.teste[this.num]);
      }else{
        this.teste[this.num - 8] = this.comparar(foto, this.num - 8);
        console.log("numero maior", this.num, n, this.teste[this.num - 8]);

      }
    }else{
      console.log("numeros iguais", this.num, n);

    }
        
  }
    
 
   comparar(f: string, n: number){
     const test = f == this.fotoTeste; 
     console.log("ANTES",  f, this.fotoTeste)
     
     //this.setString("")
     this.fotoTeste = "vazio";

     console.log("DEPOIS", f, this.fotoTeste)

     return test

   /*if(!test){
   }    
   test;*/
  }

  constructor() { }
    

  ngOnInit(): void {
  }

}
