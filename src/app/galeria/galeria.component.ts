import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  fotos: String[] = [
    "https://thumbs.dreamstime.com/b/texture-18610242.jpg", //0
    "https://thumbs.dreamstime.com/b/texture-186102585.jpg", //1
    "https://thumbs.dreamstime.com/b/texture-196152585.jpg", //2
    "https://thumbs.dreamstime.com/b/texture-196192585.jpg", //3
    "https://thumbs.dreamstime.com/b/texture-196102785.jpg", //4
    "https://thumbs.dreamstime.com/b/texture-196105785.jpg", //5   
    "https://thumbs.dreamstime.com/b/texture-196172785.jpg", //6
    "https://thumbs.dreamstime.com/b/texture-196172780.jpg", //7
    "https://thumbs.dreamstime.com/b/texture-196972085.jpg", //8
    "https://thumbs.dreamstime.com/b/texture-195972085.jpg", //9
    "https://thumbs.dreamstime.com/b/texture-196971085.jpg", //10
    "https://thumbs.dreamstime.com/b/texture-196972075.jpg", //11
    "https://thumbs.dreamstime.com/b/texture-196972084.jpg", //12
    "https://thumbs.dreamstime.com/b/texture-206972085.jpg", //13
    "https://thumbs.dreamstime.com/b/texture-206970085.jpg", //14
    "https://thumbs.dreamstime.com/b/texture-206970005.jpg"  //15
  ]

  teste: boolean[] = 
  [
    //0     1       2       3     4     5     6         7   esconder
    false, false, false, false, false, false, false, false, false
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
    console.log("CLICOU", foto)
    
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
        this.teste[this.num - 8] = this.comparar(foto, this.num - 7);
        console.log("numero maior", this.num, n, this.teste[this.num - 7]);

      }
    }else{
      console.log("numeros iguais", this.num, n);

    }
        
  }

  esconder(){
    this.teste[8] = !this.teste[8];
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
