import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ClienteModule } from './cliente/cliente.module';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule,
    UIModule,
    NgApexchartsModule,
    ClienteModule,
    PagesRoutingModule,
    FormsModule, ReactiveFormsModule
  ]

})
export class PagesModule { }
