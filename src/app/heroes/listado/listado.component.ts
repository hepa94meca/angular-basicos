import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {
  heroes:string[]=["Spiderman","Ironman","Thor"];
  heroeBorrado:string="";

  borrarHeroe(heroe:string | void ):void{
    if(!heroe){
      this.heroes=[]
      return 
    }
      this.heroes=this.heroes.filter(item=>item!==heroe)
  }
  
  shift():void{
    this.heroeBorrado=this.heroes.shift() || "";
  }
}
