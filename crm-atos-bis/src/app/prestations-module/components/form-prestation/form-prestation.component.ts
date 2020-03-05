import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { States } from 'src/app/shared-module/enums/states.enum';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states=Object.values(States);
  //because it's a subject type we don't instanciate it
  @Output() nItem:EventEmitter<Prestation> = new EventEmitter();
  @Input() item = new Prestation();
  public form:FormGroup;
  constructor(private fo: FormBuilder) { }

  ngOnInit(): void {
    this.form =this.fo.group({
      typepresta:[this.item.typePresta],
      client:[this.item.client],
      tjmht:[this.item.tjmHt],
      nbjr:[this.item.nbJours],
      tva:[this.item.tva],
      state:[this.item.state],
      comment:[this.item.comment]
    });
  }

  public onSubmit() {
    //@Output send data to arent component
    console.log(this.form.value);
    this.nItem.emit();
  }

}
