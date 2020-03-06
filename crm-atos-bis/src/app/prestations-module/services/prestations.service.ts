import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { States } from 'src/app/shared-module/enums/states.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  //Observable to be able to subscribe to it
  //Observable always with $
  private pCollection$:Observable<Prestation[]>;
  private environement:string;

  constructor(private http: HttpClient) {
    //httpCall this.http.get(this.configUrl);
    // du string avec Ctrl + alt + 7(haut)
    //Script avec ${}
    this.collection =this.http.get<Prestation[]>(`${environment.urlApi}prestations`).pipe(
      //tab objet json
      // map(tab => tab.map(objJsn => new Prestation(objJsn)))
      map((tab) => {
        return tab.map((objJsn) => {
          return new Prestation(objJsn);
        })
      })
    );
  }

  // get collection
  public get collection():Observable<Prestation[]> {
    return this.pCollection$;
  }
  //set collection
  public set collection(col:Observable<Prestation[]>) {
    this.pCollection$ = col;
  }
  // add item in collection
  public addItem(item: any){
    return this.http.post(`${environment.urlApi}prestations`,item);
  }
  // delete item in collection
  public deleteItem(item:Prestation) : Observable<Prestation>{
    return this.http.delete<Prestation>(`${environment.urlApi}prestations/${item.id}`);
  }
  // update item in collection
  public updateState(item:Prestation, state:States) {
    //Update in Database before updating Front
    let obj=new Prestation(item);
    obj.state=state;
    console.log(item.state);
    return this.updateItem(obj);
  }

  //Update Source de données
  //Patch (update) vs Put (create) vs Post norme hhtp
  public updateItem(item:Prestation) {
    //return an Observable
    return this.http.patch(`${environment.urlApi}prestations/${item.id}`,item);
  }
  public getItemById(id:string){
    return this.http.get(`${environment.urlApi}prestations/${id}`);
  }
}
