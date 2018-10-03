import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cardal1',
  templateUrl: 'mainalumno.component.html',
  styleUrls: ['mainalumno.component.css'],
})
export class CardAl1 implements OnInit{
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      matricula: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      contrasena: new FormControl(null, { validators: [Validators.required] }),
    });
  }
}
