import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  constructor(private ps: PrestationsService,
    private router:Router,
    private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public addItem(item : any){
    //logging object json from Form add [nItem]="addItem($event)
    console.log(item);
    this.ps.addItem(item).subscribe((res)=>{
      //redirection avec navigate
      // this.router.navigate(['prestations']);
      this.router.navigate(['../'], {relativeTo:this.ar});
      //
    });
  }
}
