import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'sergio';
  nombreUpper: string = 'SERGIO';
  nombreCompleto: string = 'sErgIo CalDErOn';

  fecha: Date = new Date(); //el día de hoy
  

}
