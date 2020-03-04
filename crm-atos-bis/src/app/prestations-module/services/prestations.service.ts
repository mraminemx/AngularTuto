import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  //Observable to be able to subscribe to it
  private pCollection:Observable<Prestation[]>;
  private environement:string;

  constructor(private http: HttpClient) {
    //httpCall this.http.get(this.configUrl);
    // du string avec Ctrl + alt + 7(haut)
    //Script avec ${}
    this.collection =this.http.get<Prestation[]>(`${environment.urlApi}/prestations`).pipe(
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
    return this.pCollection;
  }
  //set collection
  public set collection(col:Observable<Prestation[]>) {
    this.pCollection = col;
  }
  // add item in collection
  public addItem(item:Prestation){
    this.pCollection;
  }
  // delete item in collection
  public deleteItem(item:Prestation){
    this.pCollection;
  }
  // update item in collection
  public updateItem(item:Prestation) {
    this.pCollection;
  }
  // get item by id
  public getItem(){
  }
}
