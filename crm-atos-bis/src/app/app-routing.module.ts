import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLoginComponent} from './login/pages/page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';
import { PageClientsComponent } from './clients-module/pages/page-clients/page-clients.component';
import { PagePrestationsComponent } from './prestations-module/pages/page-prestations/page-prestations.component';

//router is a singleton can be initialized only on time

const routes: Routes = [
 { path: 'clients', component: PageClientsComponent },
 { path: 'prestations',      component: PagePrestationsComponent },
  {
    path: 'login',
    component: PageLoginComponent,
    data: { title: 'Heroes List' }
   },
  { path: '',
    redirectTo: '/login',// url/path if  redirectTo: '/login' -> url/login. if redirectTo: 'login' -> url/path/login
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //enableTracing : to start troubleshooting router-related issues is to enable tracing, which will print out every single event in the console.
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
