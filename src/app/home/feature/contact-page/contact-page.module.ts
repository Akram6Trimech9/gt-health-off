import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { TopHeaderComponent } from '../../ui/top-header/top-header.component';
import { UiModule } from '../../ui/ui.module';


@NgModule({
  declarations: [
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    UiModule
  ]
})
export class ContactPageModule { }
