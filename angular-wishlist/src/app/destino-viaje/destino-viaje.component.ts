import { Component, OnInit, Input } from '@angular/core'; // agregamos 'Input' para pasar parametros

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  nombre: string; //declaro la variable nombre de tipo string
  constructor() {
    this.nombre = 'nombre por defecto'; // le doy un valor por defecto a la variable
   }

  ngOnInit() {
  }

}
