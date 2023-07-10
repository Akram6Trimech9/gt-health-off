import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../home-page/home-page.module').then(
        (m) => m.HomePageModule 
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('../services-page/services-page.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../blog-page/blog-page.module').then(
        (m) => m.BlogPageModule
      ),
  },
  { 
    path: 'login',
  loadChildren: () =>
    import('../login/login.module').then(
      (m) => m.LoginModule
    ),
  },
  { 
    path: 'registre',
  loadChildren: () =>
    import('../registre/registre.module').then(
      (m) => m.RegistreModule
    ),
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeShellRoutingModule { }
