import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SlideComponent } from '../../ui/slide/slide.component';
import { OpeningHoursComponent } from '../../ui/opening-hours/opening-hours.component';
import { InterventionsComponent } from '../../ui/interventions/interventions.component';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import { PacientsCommentsComponent } from '../../ui/pacients-comments/pacients-comments.component';
import { NewsComponent } from '../../ui/news/news.component';
import { NewsletterComponent } from '../../ui/newsletter/newsletter.component';
import { UiModule } from '../../ui/ui.module';
import { AccPageService } from '../../data-access/acc-page.service';
import { HttpClientModule } from '@angular/common/http';
  @NgModule({
  declarations: [
          HomePageComponent
   ],
  imports: [
    CommonModule,
      HomePageRoutingModule,
      MatPaginatorModule,
      HttpClientModule,
      UiModule
   ],
  exports:[] ,
  providers:[    
      AccPageService 
  ]
})
export class HomePageModule { }
