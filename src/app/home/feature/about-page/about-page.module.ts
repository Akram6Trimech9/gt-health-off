import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopHeaderComponent } from '../../ui/top-header/top-header.component';
import { NewsletterComponent } from '../../ui/newsletter/newsletter.component';
import { UiModule } from '../../ui/ui.module';
import { AproposService } from '../../data-access/apropos.service';


@NgModule({
  declarations: [
    AboutPageComponent,

  ],
  imports: [
    CommonModule,
     AboutPageRoutingModule,
     UiModule
  ],
  providers:[
    AproposService
  ]
})
export class AboutPageModule { }
