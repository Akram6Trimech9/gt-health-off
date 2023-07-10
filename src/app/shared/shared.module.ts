import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClientHeaderComponent } from './components/client/client-header/client-header.component';
import { ClientFooterComponent } from './components/client/client-footer/client-footer.component';
import { ClientNavComponent } from './components/client/client-nav/client-nav.component';
import { HttpClientModule } from '@angular/common/http';
 
    
@NgModule({
  declarations: [HeaderComponent,FooterComponent, ChatComponent, ClientHeaderComponent, ClientFooterComponent, ClientNavComponent , 
],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
     MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule
   ],
  exports:[ HeaderComponent,FooterComponent,ChatComponent, ClientHeaderComponent, ClientFooterComponent, ClientNavComponent,      ]
})
export class SharedModule { }
// HeaderComponent,FooterComponent