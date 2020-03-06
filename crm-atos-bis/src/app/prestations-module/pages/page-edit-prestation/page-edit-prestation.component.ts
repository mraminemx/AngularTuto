import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public title:string;
  public subtitle:string;
  public item$:Observable<any>;
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
    this.ar.paramMap.subscribe(
    (datas) => {
      console.log(datas.get(`id`));
      //asynchrone call the view is generated before getting the item
      this.item$ = this.ps.getItemById(datas.get(`id`));
    });
  }

  public updateItem(item : any) {
    //logging object json from Form add [nItem]="addItem($event)
    console.log(item);
    // this.ps.getItemById(item.id);
    // this.ps.addItem(item).subscribe((res)=>{
    //   //redirection avec navigate
    //   // this.router.navigate(['prestations']);
    //   this.router.navigate(['../'], {relativeTo:this.ar});
    //   //
    // });
  }

}
