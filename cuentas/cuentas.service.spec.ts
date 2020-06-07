import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController
} from '@angular/common/http/testing';
import { CuentasService } from './cuentas.service';
import { Cuentas } from './models/cuentas.model';
describe('test cuentas Service', () => {
    let cuentasService: CuentasService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [CuentasService]
        });
        cuentasService = getTestBed().get(CuentasService);
        httpMock = getTestBed().get(HttpTestingController);


    });

    it('test cuentasService.obtenerCuentas', () => {
        const expectResult: Cuentas = { cuentas: [{ nroCuenta: 123, tipo: TipoCuentasEnum.CUu$s }] };
        const actualResult = cuentasService.obtenerCuentas({});
        httpMock.expectOne('https://apirest/getCuentas').flush(expectResult);
        expect(expect).toEqual(actualResult);


    });

});
