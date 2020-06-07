import { Component, Input } from '@angular/core';
import { Cuenta } from '../../models/cuenta.model';

@Component({
selector: 'app-cuenta',
templateUrl: 'cuenta.component.html',
})
export class CuentaComponent {
    @Input() cuenta: Cuenta;

}
