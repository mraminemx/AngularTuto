import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFountRoutingModule } from './page-not-fount-routing.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    PageNotFountRoutingModule
  ]
})
export class PageNotFoundModule { }
