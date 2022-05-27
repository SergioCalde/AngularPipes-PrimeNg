import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  orderBy: string = '';
  currentOrder: string = this.orderBy;

  heroes: Heroe[] = [

    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde
    },

  ]

  toggleMayusculas() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor: string, current: string) {

    if(valor === 'name'){
      this.orderBy = current === 'nameAsc' && this.currentOrder === 'nameAsc'? 'nameDes' : 'nameAsc';
    }else if(valor === 'vuela'){
      this.orderBy = current === 'vuelaAsc' && this.currentOrder === 'vuelaAsc'? 'vuelaDes' : 'vuelaAsc';
    }else{
      this.orderBy = current === 'colorAsc' && this.currentOrder === 'colorAsc'? 'colorDes' : 'colorAsc';
    }
    this.currentOrder = this.orderBy;
  }

}
