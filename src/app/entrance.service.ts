import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class EntranceService {
  private id: string;

  constructor(
    private http: HttpClient,
  ) {}

  addEntrance( institutionalId: string
    ) {
    const id: any = {
      institutionalId: institutionalId
    };
    this.http
      .post<{  message: string }>('http://localhost:4200/api/entrance', id)
      .subscribe(responseData => {
      alert(responseData.message);
      });
  }

}
