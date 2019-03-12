import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core'; // agregamos 'Input' para pasar parametros
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  //@Input() nombre: string; //declaro la variable nombre de tipo string, añado el decorador @Input() para pasar las variables
  @Input() destino:DestinoViaje;
  @Input('idx') position: number; // No es buena practica renombrar position
  @HostBinding('attr.class') cssClass = "col-md-4";
  @Output() clicked: EventEmitter<DestinoViaje>;
  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit() {
  }

  ir(){
    this.clicked.emit(this.destino);
    return false;
  }

}
