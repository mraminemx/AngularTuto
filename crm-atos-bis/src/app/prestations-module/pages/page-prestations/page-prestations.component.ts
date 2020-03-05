import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { States } from 'src/app/shared-module/enums/states.enum';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers =['Type','Client','Nb Jours','Tarif journalier','Total HT','Total TTC','State'];
  //to get keyvalue
  public states = Object.values(States);
  //to use pipe keyvalue
  //public states = States;
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    //to be able to subscribe and unsubscribe automaticaly using Async
    this.collection$= this.ps.collection;
    //Subscribe to an observable
    console.log(this.ps.collection);
    // this.ps.collection.subscribe(
    //   (datas) => {
    //     console.log(datas);
    //     this.collection = datas;}
    // );
  }

  public changeState(item:Prestation, event){
    console.log(event.target.value);
    this.ps.updateState(item,event.target.value).subscribe((res:Prestation)=>{
      item.state= res.state;
    });
  }
}
