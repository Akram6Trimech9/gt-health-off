import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShellRoutingModule } from './home/feature/home-shell/home-shell-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    loadChildren: () => HomeShellRoutingModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
