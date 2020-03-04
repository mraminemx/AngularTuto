import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared-module/models/prestation';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  public collection: Prestation[];
  //public collection: Observable<Prestation>;

  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    //Subscribe to an observable
    this.ps.collection.subscribe(
      (datas) => {this.collection = datas;}
    );
  }

}
