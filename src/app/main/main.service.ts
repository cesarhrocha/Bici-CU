import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class BotonService {
    public bandera: Boolean = false;
    private banderaUpdated = new Subject<Boolean>();
    esAlumno() {
        this.banderaUpdated.next(true);
    }
    esVigilante() {
        this.banderaUpdated.next(false);
    }

    checkBandera() {
        return this.banderaUpdated.asObservable();
    }
}
