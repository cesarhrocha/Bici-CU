import {Component} from '@angular/core';


@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class ToolbarOverviewExample {
  main: boolean = true;
  esEstudiante: boolean = false;
  esVigilante: boolean = false;

  


  estudiante() {
    this.esEstudiante = true;
    this.main = false;
    this.esVigilante = false;
  }
  vigilante() {
    this.esEstudiante = false;
    this.main = false;
    this.esVigilante = true;
  }


}



