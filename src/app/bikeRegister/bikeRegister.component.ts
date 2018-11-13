import { Component } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { BikeService } from '../bike.service';

export interface Bike{

}

@Component({
  templateUrl: './bikeRegister.component.html',
  styleUrls: ['./bikeRegister.component.css']
})
export class BikeRegisterComponent {
    constructor(private _bike: BikeService){}

    bikeRegister(form: NgForm){
        this._bike.bikeRegistration(form)
        .subscribe((res)=>{
            console.log(res);
        },(err) => {
            console.error(err);
        });
    }

    

}


    
