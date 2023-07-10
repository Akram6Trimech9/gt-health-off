import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './registre.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegistreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RegistreRoutingModule
  ]
})
export class RegistreModule { }
