import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EntranceService } from '../entrance.service';

@Component({
  selector: 'app-vista5',
  templateUrl: './escanear.component.html',
  styleUrls: ['./escanear.component.css']
})
export class EscanearComponent implements OnInit {
  form: FormGroup;
  escaneo: true;
  details: UserDetails;
  constructor(private auth: AuthenticationService,
    private scan: EntranceService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
        this.details = user;
      }, (err) => {
        console.error(err);
      });

      this.form = new FormGroup({
        idInst: new FormControl(null, {
          validators: [Validators.required, Validators.minLength(3)]
        })
      });
    }

    checkIsInside() {
      this.scan.addEntrance(this.form.value.idInst);
    }

  }


