export class Distancia {
  x1: string = "";
  y1: string = "";
  x2: string = "";
  y2: string = "";
  resultado: number = 0;

  calcular(): void {
    this.resultado = Math.sqrt(
      (parseFloat(this.x2) - parseFloat(this.x1)) ** 2 +
      (parseFloat(this.y2) - parseFloat(this.y1)) ** 2
    );
  }
}
