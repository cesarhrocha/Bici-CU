import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient) {}

  addUsers(nombre: string, contrasena: string,matricula: string, facultad: string, correo: string) {
      const user: any = {
          nombre: nombre, contrasena: contrasena, matricula: matricula, facultad:facultad, correo:correo};
      this.http.post<{message: string}>('http://localhost:3000/api/posts', user)
      .subscribe( (responseData) => {
        console.log(responseData.message);
      });
  }
}
