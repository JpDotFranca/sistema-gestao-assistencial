import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ConsultorService {
    urlBase = environment.urlBaseBackend;

    constructor(
        private clienteHttp: HttpClient
    ) { }

    public adicionarConsultor(dtoConsultor: any) {
        return this.clienteHttp.post(this.urlBase + "/Consultor/Adicionar", dtoConsultor);
    }

}