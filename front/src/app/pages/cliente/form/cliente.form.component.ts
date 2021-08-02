import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from './cliente.model';
import { Endereco } from './endereco.model';
import { Email } from './email.model';
import { Telefone } from './telefone.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { SweetAlert } from '../sweetalert.model';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './cliente.form.component.html',
  styleUrls: ['./cliente.form.component.scss'],
})
export class ClienteFormComponent implements OnInit, OnDestroy {
  
  private sub: any;
  breadCrumbItems: Array<{}>;
  cliente: Cliente;
  sweetAlert: SweetAlert;
  role: string = '';
  tipoAcesso: string = '';

constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute, private authService: AuthenticationService){
  this.cliente = new Cliente();
  this.cliente.emails = [];
  this.cliente.telefones = [];
  this.cliente.endereco = new Endereco();
}

ngOnInit(){
  this.role = this.authService.hasAutority;
  this.tipoAcesso = this.route.snapshot.data.tipo;

  this.sub = this.route.params.subscribe(params => {
    let idCliente = params['id'];
    if(idCliente == undefined){
      this.adicionarEmail();
      this.adicionarTelefone();
    }else{
      this.clienteService.getClientePorId(idCliente).subscribe(response => { 
        this.cliente = response;
      })
    }
 });

  this.sweet();
  this.breadCrumbItems = [{ label: 'Cliente', path: '/' }, { label: 'Cadastro', path: '/', active: true }];
}

salvar(){

  this.clienteService.cadastro(this.cliente)
      .subscribe(response => {
        this.sweetAlert.method();
        this.router.navigate(['/lista']);

      })
}

sweet(){
  this.sweetAlert =  new SweetAlert()
  this.sweetAlert.title = 'A custom positioned dialog';
  this.sweetAlert.method = () => {
      Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Registro salvo com Sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    }
}

adicionarEmail(){
  this.cliente.emails.push(new Email());
}

adicionarTelefone(){
  this.cliente.telefones.push(new Telefone());
}

removerEmail(email){
  if(this.cliente.emails.length > 1){
    const index: number = this.cliente.emails.indexOf(email);
    if (index !== -1) {
      this.cliente.emails.splice(index, 1);
  }  
  }
}

removerTelefone(telefone){
  if(this.cliente.telefones.length > 1){
    const index: number = this.cliente.telefones.indexOf(telefone);
    if (index !== -1) {
      this.cliente.telefones.splice(index, 1);
  }  
}
}

buscarEndereco(cep){
  this.clienteService.getEnderecoByCep(this.cliente.endereco.cep).subscribe(endereco => {
    this.cliente.endereco = endereco;
  })
}

ngOnDestroy() {
  this.sub.unsubscribe();
}


}