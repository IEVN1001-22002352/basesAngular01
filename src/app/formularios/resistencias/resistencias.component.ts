import { Component } from '@angular/core';
import { OperacionesResistencias } from './operacionesResistencias';


@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  operaciones = new OperacionesResistencias();

    procesar(): void {
      this.operaciones.calcular();
  }
}