import {Component} from '@angular/core';
import { BotonService } from '../main/main.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'toolbar-overview-example',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class ToolbarOverviewExample {
  bandera: Boolean;
  private botonSub: Subscription;

  constructor(private botonService: BotonService) {}
  
  escuchar() {
    this.botonSub = this.botonService.checkBandera()
    .subscribe( (boo: Boolean) => {
      this.bandera = boo;
    })
  }
  
  
}



