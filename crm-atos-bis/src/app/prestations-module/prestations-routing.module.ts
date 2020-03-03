import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

//Alt + Maj + O ordonnancer
//router is a singleton can be initialized only on time
const routes: Routes = [
{ path: '', component: PagePrestationsComponent}
];

@NgModule({
  //enableTracing : to start troubleshooting router-related issues is to enable tracing, which will print out every single event in the console.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }