import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { HomePageModule } from '../home-page/home-page.module';
import { AboutPageModule } from '../about-page/about-page.module';
import { ServicesPageModule } from '../services-page/services-page.module';
import { UiModule } from '../../ui/ui.module';
import { BlogPageModule } from '../blog-page/blog-page.module';
import { ContactPageModule } from '../contact-page/contact-page.module';
import { RouterModule } from '@angular/router';
import { AccPageService } from '../../data-access/acc-page.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeShellRoutingModule } from './home-shell-routing.module';
   
  

@NgModule({
  declarations: [   

     ],
  imports: [
    CommonModule,
     HomePageModule,
     HomeShellRoutingModule,
     AboutPageModule,
     BlogPageModule,
     ContactPageModule,
     RouterModule,
    ServicesPageModule ,
    HttpClientModule,
  ],
  providers:[
      ]
  })
export class HomeShellModule { }
