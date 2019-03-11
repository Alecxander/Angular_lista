import { Component, OnInit, Input, HostBinding } from '@angular/core'; // agregamos 'Input' para pasar parametros
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  //@Input() nombre: string; //declaro la variable nombre de tipo string, añado el decorador @Input() para pasar las variables
  @Input() destino:DestinoViaje[];
  @HostBinding('attr.class') cssClass = "col-md-4";
  constructor() {}

  ngOnInit() {
  }

}
