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

  // public collection: Prestation[];
  public collection$: Observable<Prestation>;
  public entete =['Type','Client','Nb Jours','Total HT','Total TTC','State'];
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    //to be able to subscribe and unsubscribe automaticaly using Async
    this.collection$= this.collection$;
    //Subscribe to an observable
    // console.log(ps.collection);
    // this.ps.collection.subscribe(
    //   (datas) => {
    //     console.log(datas);
    //     this.collection = datas;}
    // );
  }

}
