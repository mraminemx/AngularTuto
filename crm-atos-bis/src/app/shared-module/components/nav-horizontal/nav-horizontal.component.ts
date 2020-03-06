import { Component, OnInit, Input } from '@angular/core';
import { setFlagsFromString } from 'v8';

@Component({
  selector: 'app-nav-horizontal',
  templateUrl: './nav-horizontal.component.html',
  styleUrls: ['./nav-horizontal.component.scss']
})
export class NavHorizontalComponent implements OnInit {

@Input() list : Array<{route:string, label:string}>;
  constructor() { }

  ngOnInit(): void {
  }

}
