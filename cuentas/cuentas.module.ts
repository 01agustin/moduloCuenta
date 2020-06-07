import { CuentasService } from './cuentas.service';
import { CuentasComponent } from './containers/cuentas.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialModule } from './../material/material.module';
import { CuentaComponent } from './component/cuenta/cuenta.component';

@NgModule({
  declarations: [
    CuentaComponent,
    CuentasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
      CuentasService
  ]
})
export class CuentasModule {

}
