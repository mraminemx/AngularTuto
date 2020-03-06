import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared-module/models/prestation';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public item$:Subject<Prestation>;
  constructor(private ps:PrestationsService) { }

  ngOnInit(): void {
    this.item$ = this.ps.itemDetails$;
  }

}
