import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {
  

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor (private dbzService:DbzService){}
  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (!this.nuevo.nombre.trim()) {
      return;
    }
    
    //this.onNewCharacter.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
