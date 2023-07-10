import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsComponent } from './news/news.component';
import { PacientsCommentsComponent } from './pacients-comments/pacients-comments.component';
import { SlideComponent } from './slide/slide.component';
import { OpeningHoursComponent } from './opening-hours/opening-hours.component';
import { TabsComponent } from './tabs/tabs.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MilestonesComponent } from './milestones/milestones.component';
import { CardComponent } from './card/card.component';
  import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [  
    TopHeaderComponent,
    InterventionsComponent,
    NewsletterComponent,
  NewsComponent,
PacientsCommentsComponent,
SlideComponent,
OpeningHoursComponent,
TopHeaderComponent,
TabsComponent,
MilestonesComponent,
CardComponent,
  ForgotPasswordComponent,
   ] ,
   imports: [
    CommonModule,
    FormsModule,
    MatStepperModule,
     ReactiveFormsModule,
        NgbCarouselModule
  ],
  exports:[  
    TopHeaderComponent,
    InterventionsComponent,
    NewsletterComponent,
  NewsComponent,
  OpeningHoursComponent,
PacientsCommentsComponent,
SlideComponent,
TopHeaderComponent,
TabsComponent,
MilestonesComponent,
CardComponent,
  ForgotPasswordComponent,
 ],
})
export class UiModule { }
