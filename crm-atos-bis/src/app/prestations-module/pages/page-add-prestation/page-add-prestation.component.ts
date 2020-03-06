import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
  }

  public addItem(item : any){
    //logging object json from Form add [nItem]="addItem($event)
    console.log(item);
  }
}
