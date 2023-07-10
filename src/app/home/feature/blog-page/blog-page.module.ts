import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { BlogPageComponent } from './blog-page.component';
import { UiModule } from '../../ui/ui.module';


@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    BlogPageRoutingModule
  ]
})
export class BlogPageModule { }
