import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from './form/cliente.model';
import { Endereco } from './form/endereco.model';


@Injectable({
    providedIn: 'root'
})

export class ClienteService {
   
    constructor(private http: HttpClient) {
    }
  

    getEnderecoByCep(cep): Observable<Endereco>{
        return this.http.get<Endereco>(`${environment.apiUrl}/endereco/cep/${cep}`);
    }

    public cadastro(cliente: Cliente): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/cliente/`, cliente);
    }

    getClientes(): Observable<Cliente[]>{
        return this.http.get<Cliente[]>(`${environment.apiUrl}/cliente/`);
    }

    getClientePorId(id): Observable<Cliente>{
        return this.http.get<Cliente>(`${environment.apiUrl}/cliente/${id}`);
    }

    public delete(id: number): Observable<HttpResponse<any>>{
        return this.http.delete<any>(`${environment.apiUrl}/cliente/delete/${id}`, { observe: 'response' });
    }

   

}
