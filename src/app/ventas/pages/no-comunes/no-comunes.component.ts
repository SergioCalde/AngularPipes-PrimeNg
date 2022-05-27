import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Lucas', 'Sergio', 'Fernando', 'Nicole'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = (this.nombre === 'Sergio') ? 'Susana' : 'Sergio';
    this.genero = (this.genero === 'masculino') ? 'femenino' : 'masculino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  agregarCliente() {
    this.clientes.push('cliente');
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Sergio',
    edad: 24,
    direccion: 'San José, Costa Rica'
  }

  //JsonPipe

heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  },
];

  // Async Pipe

  miObservable = interval(5000);

  valorPromesa = new Promise( ( resolve, reject ) => {
    
    setTimeout(()=> {
      resolve( 'Tenemos data de promesa' );
    },3500);

  } );

}
