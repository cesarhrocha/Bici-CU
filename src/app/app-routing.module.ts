import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardOverviewExample} from './main/main.component';
import { CardAl1 } from './mainalumno/mainalumno.component';
import { Registro } from './registro/registro.component';
import { InicioAl } from './inicio-al/inicio-al.component';
import { MainVigilante } from './mainvigilante/mainvigilante.component';
import { Registrov } from './registrov/registrov.component';
import { InicioVig } from './iniciovig/iniciovig.component';
import { Entrada } from './entrada/entrada.component';
import { Salida } from './salida/salida.component';
import { SalidaVal } from './salidaval/salidaval.component';
import { EntradaVal } from './entradaval/entradaval.component';

const routes: Routes = [
{path : '', component: CardOverviewExample},
{path : 'mainalumno', component: CardAl1},
{path : 'registroal', component: Registro},
{path : 'inicio-al', component: InicioAl},
{path : 'mainvigilante', component: MainVigilante},
{path : 'registrov', component: Registrov},
{path : 'iniciov', component: InicioVig},
{path : 'entrada', component: Entrada},
{path : 'salida', component: Salida},
{path : 'darentrada', component: EntradaVal},
{path : 'darsalida', component: SalidaVal},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}