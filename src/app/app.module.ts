import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarOverviewExample} from './header/header.component';
import {CardOverviewExample} from './main/main.component';
import {CardAl1} from './mainalumno/mainalumno.component';
import {Registro} from './registro/registro.component';
import {InicioAl} from './inicio-al/inicio-al.component';
import {Registrov} from './registrov/registrov.component';
import {Entrada} from './entrada/entrada.component';
import {Salida} from './salida/salida.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { MainVigilante } from './mainvigilante/mainvigilante.component';
import {MatListModule} from '@angular/material/list';
import { InicioVig } from './iniciovig/iniciovig.component';
import { SalidaVal } from './salidaval/salidaval.component';
import { EntradaVal } from './entradaval/entradaval.component';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarOverviewExample,
    CardOverviewExample,
    CardAl1,
    Registro,
    InicioAl,
    Registrov,
    MainVigilante,
    Entrada,
    Salida,
    InicioVig,
    SalidaVal,
    EntradaVal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

