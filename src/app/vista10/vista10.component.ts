import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vista10',
  templateUrl: './vista10.component.html',
  styleUrls: ['./vista10.component.css']
})
export class Vista10Component implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['11', '12', '13', '14', '15'];
  public barChartbackgroundColor = "rgba(000,111,111,55)";
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [8, 10, 9, 7, 8], label: 'Bicicletas por Hora'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
