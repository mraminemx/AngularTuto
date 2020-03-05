import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { States } from 'src/app/shared-module/enums/states.enum';
import { Prestation } from 'src/app/shared-module/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states=Object.values(States);
  //because it's a subject type we don't instanciate it
  @Output() nItem:EventEmitter<Prestation> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
