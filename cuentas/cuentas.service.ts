import { Cuentas } from './models/cuentas.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CuentasService {
    constructor(private httpClient: HttpClient) {

    }

    obtenerCuentas(param: any): Observable<Cuentas> {
        const url = `https://apirest/getCuentas/${param}`;
        return this.httpClient.get<Cuentas>(url);
    }
}
