export class OperacionesResistencias {
  banda1: number = 0;
  banda2: number = 0;
  multiplicador: number = 1;
  tolerancia: number = 0;

  colorBanda1: string = '';
  colorBanda2: string = '';
  colorBanda3: string = '';
  colorTolerancia: string = '';

  valorNormal: number = 0;
  valorMinimo: number = 0;
  valorMaximo: number = 0;

  calcular(): void {
    // --- Colores Banda 1 ---
    if (this.banda1 == 0) this.colorBanda1 = 'Negro';
    if (this.banda1 == 1) this.colorBanda1 = 'Marrón';
    if (this.banda1 == 2) this.colorBanda1 = 'Rojo';
    if (this.banda1 == 3) this.colorBanda1 = 'Naranja';
    if (this.banda1 == 4) this.colorBanda1 = 'Amarillo';
    if (this.banda1 == 5) this.colorBanda1 = 'Verde';
    if (this.banda1 == 6) this.colorBanda1 = 'Azul';
    if (this.banda1 == 7) this.colorBanda1 = 'Violeta';
    if (this.banda1 == 8) this.colorBanda1 = 'Gris';
    if (this.banda1 == 9) this.colorBanda1 = 'Blanco';

    // --- Colores Banda 2 ---
    if (this.banda2 == 0) this.colorBanda2 = 'Negro';
    if (this.banda2 == 1) this.colorBanda2 = 'Marrón';
    if (this.banda2 == 2) this.colorBanda2 = 'Rojo';
    if (this.banda2 == 3) this.colorBanda2 = 'Naranja';
    if (this.banda2 == 4) this.colorBanda2 = 'Amarillo';
    if (this.banda2 == 5) this.colorBanda2 = 'Verde';
    if (this.banda2 == 6) this.colorBanda2 = 'Azul';
    if (this.banda2 == 7) this.colorBanda2 = 'Violeta';
    if (this.banda2 == 8) this.colorBanda2 = 'Gris';
    if (this.banda2 == 9) this.colorBanda2 = 'Blanco';

    // --- Multiplicador (Banda 3) ---
    if (this.multiplicador == 1) this.colorBanda3 = 'Negro';
    if (this.multiplicador == 10) this.colorBanda3 = 'Marrón';
    if (this.multiplicador == 100) this.colorBanda3 = 'Rojo';
    if (this.multiplicador == 1000) this.colorBanda3 = 'Naranja';
    if (this.multiplicador == 10000) this.colorBanda3 = 'Amarillo';
    if (this.multiplicador == 100000) this.colorBanda3 = 'Verde';
    if (this.multiplicador == 1000000) this.colorBanda3 = 'Azul';
    if (this.multiplicador == 10000000) this.colorBanda3 = 'Violeta';
    if (this.multiplicador == 100000000) this.colorBanda3 = 'Gris';
    if (this.multiplicador == 1000000000) this.colorBanda3 = 'Blanco';

    if (this.tolerancia == 0.05) this.colorTolerancia = 'Dorado (±5%)';
    if (this.tolerancia == 0.10) this.colorTolerancia = 'Plateado (±10%)';

    let numeroBase = parseInt(this.banda1.toString() + this.banda2.toString());
    this.valorNormal = numeroBase * this.multiplicador;

    this.valorMinimo = this.valorNormal - (this.valorNormal * this.tolerancia);
    this.valorMaximo = this.valorNormal + (this.valorNormal * this.tolerancia);
  }
}
