import { Component } from '@angular/core';

@Component({
  selector: 'app-boletos-cinepolis',
  standalone: false,
  templateUrl: './boletos-cinepolis.component.html',
  styleUrl: './boletos-cinepolis.component.css'
})
export class BoletosCinepolisComponent {
  nombre:string="";
  cantidadCompradores:string="";
  tarjetaCineco:string="";
  cantidadBoletos:string="";
  cantidadMaximaBoletos:number=7;
  pago:number=0;
  pagoFinal:number=0;
  accion:string="";
  precioBoleto:number=12;
  mensaje:string="";

acciones():void{
    this.cantidadMaximaBoletos=parseFloat(this.cantidadCompradores)*7;

    if(parseFloat(this.cantidadBoletos)>this.cantidadMaximaBoletos){
      this.mensaje="Cada persona no puede comprar más de 7 boletos";
      this.pagoFinal=0;
    }
    else{
      if(parseFloat(this.cantidadBoletos)<=2){
        this.pago=this.precioBoleto*(parseFloat(this.cantidadBoletos));
        if(this.tarjetaCineco==="si"){
          this.pagoFinal=this.pago*.90;
        }
        if(this.tarjetaCineco==="no"){
          this.pagoFinal=this.pago;
        }
      }
      if (parseFloat(this.cantidadBoletos) >= 3 && parseFloat(this.cantidadBoletos) <= 5){
        this.pago=(this.precioBoleto*(parseFloat(this.cantidadBoletos)))*.90;
        if(this.tarjetaCineco==="si"){
          this.pagoFinal=this.pago*.90;
        }
        if(this.tarjetaCineco==="no"){
          this.pagoFinal=this.pago;
        }
      }
      if (parseFloat(this.cantidadBoletos) > 5 && parseFloat(this.cantidadBoletos) <= this.cantidadMaximaBoletos) {
        this.pago = this.precioBoleto * parseFloat(this.cantidadBoletos) * 0.85;
        if (this.tarjetaCineco === "si") {
          this.pagoFinal = this.pago * 0.90;
        } else {
          this.pagoFinal = this.pago;
        }
      }
    }
  }
}


