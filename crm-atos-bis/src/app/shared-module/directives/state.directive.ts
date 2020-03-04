import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit{
  @Input() appState:any;
  //Host Binding to access td property
  @HostBinding('class') classTd:string;
  ngOnInit(): void {
    console.log(this.appState);
    this.classTd ='state-confirme';
  }

  constructor() {
  }

}
