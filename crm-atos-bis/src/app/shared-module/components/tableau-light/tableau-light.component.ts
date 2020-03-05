import { Component, OnInit, Input } from '@angular/core';
// import { Prestation } from '../../models/prestation';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
})
export class TableauLightComponent implements OnInit {

  @Input() headers:string[];
  //binding of the property from parent object
  // @Input() collection$: Observable<Prestation[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
