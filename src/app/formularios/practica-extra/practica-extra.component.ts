import { Component } from '@angular/core';
import { Distancia } from './distancia';

@Component({
  selector: 'app-practica-extra',
  standalone: false,
  templateUrl: './practica-extra.component.html',
  styleUrls: ['./practica-extra.component.css']
})
export class PracticaExtraComponent {
  distancia = new Distancia();

  procesar(): void {
    this.distancia.calcular();
  }
}
