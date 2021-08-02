import { Component, OnInit } from '@angular/core';
import { Cliente } from '../form/cliente.model';
import { ClienteService } from '../cliente.service';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { SweetAlert } from '../sweetalert.model';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './cliente.lista.component.html',
  styleUrls: ['./cliente.lista.component.scss']
})
export class ClienteListaComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  clientes: Cliente[] = [];
  sweetAlert: SweetAlert;
  role: string = '';

  constructor(private clienteService: ClienteService, private authService: AuthenticationService){
    
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Cliente', path: '/' }, { label: 'Lista', path: '/', active: true }];
    this.carregarClientes();
    this.sweet();
    this.role = this.authService.hasAutority;

      }


carregarClientes(){
  this.clienteService.getClientes().subscribe(response => {
    this.clientes = response;
  })
}

deleteCliente(id){
  this.clienteService.delete(id).subscribe(response => {
    this.carregarClientes();
    this.sweetAlert.method();
  })
}

sweet(){
  this.sweetAlert = {
    title: 'A custom positioned dialog',
    method: () => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registro removido com Sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };
}

}
