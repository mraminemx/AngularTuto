import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageLoginComponent} from './login/pages/page-login/page-login.component';

//router is a singleton can be initialized only on time

const routes: Routes = [
//  { path: 'crisis-center', component: CrisisListComponent },
 // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'login',
    component: PageLoginComponent//Composant/Components Login
  },
  { path: '',
    redirectTo: '/login',// url/path if  redirectTo: '/login' -> url/login. if redirectTo: 'login' -> url/path/login
    pathMatch: 'full'
  }
  //,{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  //enableTracing : to start troubleshooting router-related issues is to enable tracing, which will print out every single event in the console.
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
