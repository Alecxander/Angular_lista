import { Component, OnInit, Input } from '@angular/core'; // agregamos 'Input' para pasar parametros

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent implements OnInit {
  @Input() nombre: string; //declaro la variable nombre de tipo string, añado el decorador @Input() para pasar las variables
  constructor() {}

  ngOnInit() {
  }

}
