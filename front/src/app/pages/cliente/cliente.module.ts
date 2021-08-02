import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbPaginationModule, NgbTypeaheadModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../../shared/ui/ui.module';

import { NgxMaskModule } from 'ngx-mask';
import { ClienteFormComponent } from './form/cliente.form.component';
import { ClienteListaComponent } from './lista/cliente.lista.component';
import { ClienteRoutingModule } from './cliente-routing.module';

@NgModule({
  declarations: [ClienteFormComponent, ClienteListaComponent],
  imports: [
    CommonModule,
    UIModule,
    NgbCarouselModule,
    ClienteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgxMaskModule.forRoot()
  ]
})
export class ClienteModule { }
