import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { States } from 'src/app/shared-module/enums/states.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {

  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers =['Type','Client','Nb Jours','Tarif journalier','Total HT','Total TTC','State'];
  public title:string;
  public subtitle:string;
  public label:string;
  public route:string;
  public externallink:string;
  //to get keyvalue
  public states = Object.values(States);
  //to use pipe keyvalue
  //public states = States;
  constructor(private ps: PrestationsService,
    private acroute:ActivatedRoute) { }

  ngOnInit(): void {
    //to be able to subscribe and unsubscribe automaticaly using Async
    this.collection$= this.ps.collection;
    this.acroute.data.subscribe(
      (datas)=>{console.log(datas);
      this.title=datas.title;
      this.subtitle=datas.subtitles;
      }
    );
    //Subscribe to an observable
    console.log(this.ps.collection);
    this.title="Prestations";
    this.subtitle="Toutes les prestations"
    this.label ="Ajouter une prestation";
    this.route="add";
    this.externallink="https://www.google.fr";
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
