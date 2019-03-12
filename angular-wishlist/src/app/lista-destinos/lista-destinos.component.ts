import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  //destinos: DestinoViaje[]; // Inicializo la variable pero ya no con string[] sino con DestinoViaje[]
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  constructor() { 
    this.onItemAdded = new EventEmitter();

  }

  ngOnInit() {
  }

  agregado(d: DestinoViaje){
    this.onItemAdded.emit(d);
    // console.log(this.destinos);
    // console.log(new DestinoViaje(nombre, url))
    // console.log(url);
    return false;
    
  }

  elegido(d:DestinoViaje){
    //this.destinos.forEach(function(x) {x.setSelected(false);})
    d.setSelected(true);
  }
}
