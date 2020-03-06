import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Prestation } from 'src/app/shared-module/models/prestation';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public title:string;
  public subtitle:string;
  // public itemId:string;
  public item$:Observable<Prestation>;
  constructor(private ps: PrestationsService,
    private router:Router,
    private ar:ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.data.subscribe(
      (datas)=>{console.log(datas);
      this.title=datas.title;
      this.subtitle=datas.subtitles;
      }
    );

    // this.ar.paramMap.subscribe(
    // (datas) => {
    //   console.log(datas.get(`id`));
    //   //asynchrone call the view is generated before getting the item
    //   this.item$ = this.ps.getItemById(datas.get(`id`));
    // });

    this.item$ = this.ar.paramMap.pipe(
      //Operateur js qui fait la subscribtion et unsubscribe quand il recupere la data
      switchMap((params: ParamMap) => {
        // this.itemId = params.get(`id`);
       return this.ps.getItemById(params.get(`id`));
      })
    );


  }

  public updateItem(item : any) {
    //logging object json from Form add [nItem]="addItem($event)
    console.log(item);
    // item.id=this.itemId;
    this.ps.updateItem(item).subscribe((res)=>{
      //redirection avec navigate
      // this.router.navigate(['prestations']);
      this.router.navigate(['../../'], {relativeTo:this.ar});
    });
  }

}
