import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class BikeService {

  constructor(private http: HttpClient) {}

  bikeRegistration(form: NgForm): Observable<any> {
    const newBike: any = {
      brand: form.value.brand,
      model: form.value.model,
      size: form.value.size,
      color: form.value.color,
      institutionalId: form.value.institutionalId
    };
    return this.http.post('/api/bikes', newBike);
  }

  
}
 