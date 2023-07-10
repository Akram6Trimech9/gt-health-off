import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { FooterComponent } from '../shared/components/home/footer/footer.component';
 import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientComponent } from './client-layout/client.component';
 


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
})
export class LayoutModule { }
