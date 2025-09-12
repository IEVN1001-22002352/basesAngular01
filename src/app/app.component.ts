import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Yafté Ramirez';

  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"El Gran Pez",
    anio: 2010,
    genero: "Drama"
  }
}
