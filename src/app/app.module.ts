import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolbarOverviewExample} from './header/header.component';
import {CardOverviewExample} from './main/main.component'
import {CardAl1}from './mainalumno/mainalumno.component'
import {Registro} from './registro/registro.component'
import {InicioAl} from'./inicio-al/inicio-al.component'
import {Registrov} from './registrov/registrov.component'

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarOverviewExample,
    CardOverviewExample,
    CardAl1,
    Registro,
    InicioAl,
    Registrov
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
