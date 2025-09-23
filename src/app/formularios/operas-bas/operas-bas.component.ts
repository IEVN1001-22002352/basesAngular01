import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  tipoOperacion:string="";
  num1:string="";
  num2:string="";
  resultado:number=0;

  resolver():void{
    if (this.tipoOperacion==="sumar"){
      this.resultado=parseFloat(this.num1)+parseInt(this.num2);
    }
    else if (this.tipoOperacion==="restar"){
      this.resultado=parseFloat(this.num1)-parseInt(this.num2);
    }
    else if (this.tipoOperacion==="multiplicar"){
      this.resultado=parseFloat(this.num1)*parseInt(this.num2);
    }
    else if(this.tipoOperacion==="dividir"){
      this.resultado=parseFloat(this.num1)/parseInt(this.num2);
    }
  }
}
