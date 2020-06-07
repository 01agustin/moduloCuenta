import { CuentasService } from './../cuentas.service';
import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../models/cuentas.model';
import { Cuenta } from '../models/cuenta.model';

@Component({
    selector: 'app-cuentas',
    templateUrl: 'cuentas.container.html'
})
export class CuentasComponent implements OnInit {
    cuentas: Cuenta[];
    filtroTipo: TipoCuentasEnum;
    tiposCuenta: TipoCuentasEnum[] = [TipoCuentasEnum.CA$, TipoCuentasEnum.CAu$s, TipoCuentasEnum.CU$, TipoCuentasEnum.CUu$s];
    constructor(private cuentasService: CuentasService) {

    }
    ngOnInit(): void {
        this.obtenerCuentas();
    }

    selecccionTipo(tipo: TipoCuentasEnum) {
        this.filtroTipo = tipo;
        this.cuentas = this.cuentas.filter(cuenta => cuenta.tipo);
    }
    obtenerCuentas() {
        this.cuentasService.obtenerCuentas({}).subscribe((cuentasResponse: Cuentas) => {
            this.cuentas = cuentasResponse.cuentas;
        });
    }
}
