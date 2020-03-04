import { HttpClientModule } from '@angular/common/http';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiModule } from './ui/ui.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    UiModule,
   ///dprecated from version 3 NgbModule.forRoot()
   NgbModule
  ],
  providers : [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
