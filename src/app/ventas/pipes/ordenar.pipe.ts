import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], orderBy: string = 'sin valor'): Heroe[] {


    switch(orderBy) {
      case 'nameAsc':
        return value = value.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
      case 'nameDes':
        return value = value.sort((a, b) => (a.nombre > b.nombre) ? -1 : 1);
      case 'vuelaAsc':
        return value = value.sort((a, b) => (a.vuela > b.vuela) ? 1 : -1);
      case 'vuelaDes':
        return value = value.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);
      case 'colorAsc':
        return value = value.sort((a, b) => (a.color > b.color) ? 1 : -1);
      case 'colorDes':
        return value = value.sort((a, b) => (a.color > b.color) ? -1 : 1);
      default:
        return value;
    }

  }
}