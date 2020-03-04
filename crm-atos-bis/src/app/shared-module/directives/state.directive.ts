import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnInit{
  ngOnInit(): void {
    console.log(this.appState);
  }

  @Input() appState:any;
  constructor() {
  }

}
