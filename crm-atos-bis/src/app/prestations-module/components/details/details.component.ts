import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public item$:Subject<Prestation>;
  constructor(private ps:PrestationsService) { }

  ngOnInit(): void {
    this.item$ = this.ps.itemDetails$;
  }

}
