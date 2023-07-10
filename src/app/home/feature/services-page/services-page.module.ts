import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesPageRoutingModule } from './services-page-routing.module';
import { ServicesPageComponent } from './services-page.component';
import { UiModule } from '../../ui/ui.module';
   

@NgModule({
  declarations: [
    ServicesPageComponent,
 
   ],
  imports: [
    CommonModule,
    UiModule,
     ServicesPageRoutingModule,
     
  ]
})
export class ServicesPageModule { }
