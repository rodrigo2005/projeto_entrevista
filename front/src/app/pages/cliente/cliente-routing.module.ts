import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './form/cliente.form.component';
import { ClienteListaComponent } from './lista/cliente.lista.component';


const routes: Routes = [
    {
        path: 'cadastro',
        component: ClienteFormComponent
    },
    {
        path: 'lista',
        component: ClienteListaComponent
    }, {
        path: ':id/editar',
        component: ClienteFormComponent,
        data: {
            tipo: 'editar'
        }
    }, {
        path: ':id/visualizar',
        component: ClienteFormComponent,
        data: {
            tipo: 'visualizar'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
