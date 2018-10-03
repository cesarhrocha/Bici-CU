import {Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from './registro.service';
@Component({
  selector: 'registro',
  templateUrl: 'registro.component.html',
  styleUrls: ['registro.component.css'],
})
export class Registro {
 form : FormGroup;

 constructor(public userService: UserService){

 }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      correo: new FormControl(null, { validators: [Validators.required] }),
      contrasena: new FormControl(null, { validators: [Validators.required] }),
      matricula: new FormControl(null, { validators: [Validators.required] }),
      facultad: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  addUser() {
    console.log( this.form.value.nombre);
    console.log(  this.form.value.correo,);
    console.log( this.form.value.contrasena);
    console.log( this.form.value.matricula);
    console.log( this.form.value.facultad);
/*
    this.userService.addUsers(
      this.form.value.nombre,
      this.form.value.correo,
      this.form.value.contrasena,
      this.form.value.matricula,
      this.form.value.facultad,
    );
    */
  }
}

