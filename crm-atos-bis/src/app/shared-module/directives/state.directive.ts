import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{

  @Input() appState:any;
  //Host Binding to access td property
  @HostBinding('class') classTd:string;
  // ngOnInit(): void {
  //   console.log(this.appState);
  //   this.classTd =this.formatClass(this.appState);
  // }
  private formatClass(state: any): string {
    return `state-${state.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "").toLowerCase()}`;
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.appState);
    this.classTd =this.formatClass(this.appState);
  }

  constructor() {
  }

}
