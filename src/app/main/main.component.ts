import {Component} from '@angular/core';
import { BotonService } from './main.service';
@Component({
  selector: 'card-overview-example',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
})


export class CardOverviewExample {

  constructor(private botonService: BotonService) {}

  cambiarAlumno() {
    this.botonService.esAlumno();
  }

  cambiarVigilante() {
    this.botonService.esVigilante();
  }

}
