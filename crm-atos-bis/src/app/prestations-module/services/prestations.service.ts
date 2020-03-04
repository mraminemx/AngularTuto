import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  //Observable to be able to subscribe to it
  private pCollection:Observable<Prestation[]>;
  constructor(private http: HttpClient) {
    //httpCall this.http.get(this.configUrl);
    this.collection =http.;
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
