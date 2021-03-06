import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { States } from 'src/app/shared-module/enums/states.enum';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      //add Validator
      typePresta:[this.item.typePresta,Validators.required],
      //compose validators
      client:[this.item.client,Validators.compose([Validators.required,Validators.minLength(3)])],
      tjmht:[this.item.tjmHt],
      nbjr:[this.item.nbJours],
      tva:[this.item.tva],
      state:[this.item.state],
      comment:[this.item.comment],
      id:[this.item.id]
    });
  }

  public onSubmit() {
    //@Output send data to arent component
    console.log(this.form.value);
    //send notification to parent component -> page-add-prestation
    this.nItem.emit(this.form.value);
  }

}
