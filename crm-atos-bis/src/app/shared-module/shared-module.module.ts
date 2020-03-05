import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  exports: [TotalPipe, StateDirective, TableauLightComponent, TableauDarkComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
