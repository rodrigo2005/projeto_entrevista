import { Email } from './email.model';
import { Telefone } from './telefone.model';
import { Endereco } from './endereco.model';

// Table data
export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    emails: Email[];
    telefones: Telefone[];
    endereco: Endereco;
    criadoPor: string;
    dataCriacao: Date;
    
    constructor(){}
}
