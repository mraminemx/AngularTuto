import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

//Alt + Maj + O ordonnancer
//router is a singleton can be initialized only on time
const routes: Routes = [
 {
 path: 'clients',
 loadChildren:()=>import('./clients-module/clients-module.module').then(m=>m.ClientsModuleModule)
},
{
  path: 'prestations',
  loadChildren:()=>import('./prestations-module/prestations-module.module').then(m=> m.PrestationsModuleModule)
 },
 { path: '', redirectTo: '/login',// url/path if  redirectTo: '/login' -> url/login. if redirectTo: 'login' -> url/path/login
    pathMatch: 'full'},
 { path: '**', loadChildren:()=>import('./page-not-found/page-not-found.module').then(m=> m.PageNotFoundModule)}
];

@NgModule({
  //enableTracing : to start troubleshooting router-related issues is to enable tracing, which will print out every single event in the console.
  imports: [RouterModule.forRoot(routes, {enableTracing:false, preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
// Diagnostic only: inspect router configuration
constructor(router: Router) {
  // Use a custom replacer to display function names in the route configs
  const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
  console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
}
}
