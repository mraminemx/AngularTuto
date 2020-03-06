import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { States } from 'src/app/shared-module/enums/states.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public faTrashAlt=faTrashAlt;
  // public collection: Prestation[];
  public collection$= new BehaviorSubject<Prestation[]>(null);
  public headers =['Type','Client','Nb Jours','Tarif journalier','Total HT','Total TTC','State','Action'];
  public title:string;
  public subtitle:string;
  public label:string;
  public googlelink:string;
  public route:string;
  public externallink:string;
  //to get keyvalue
  public states = Object.values(States);
  //to use pipe keyvalue
  //public states = States;
  constructor(private ps: PrestationsService,
    private acroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //to be able to subscribe and unsubscribe automaticaly using Async
    // this.collection$= this.ps.collection;
    this.ps.collection.subscribe(
      (datas) => {
        this.collection$.next(datas);
      }
    );
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
    this.googlelink="GoOgLe";
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

  public delete(item:Prestation){
    this.ps.deleteItem(item).subscribe(
    (res:Prestation) =>{
      //Update List Hot Observable
      console.log(`Return : ${res}`);
      this.ps.collection.subscribe(
        (datas) => {
          this.collection$.next(datas);
        }
      );
    }
    );
  }

  public edit(item:Prestation){
   //Similare to the line under this.router.navigate([`prestation/edit`,item.id]);
    this.router.navigate([`prestation`,`edit`,item.id]);
  }
}
