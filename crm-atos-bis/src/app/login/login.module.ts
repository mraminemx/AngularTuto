import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponentsComponent } from './pages/page-login-components/page-login-components.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';



@NgModule({
  declarations: [PageLoginComponentsComponent, PageLoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
