import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { cardCorte, actionEmitterCorte } from 'src/app/shared/models/card-corte.model';

@Component({
  selector: 'app-card-corte',
  templateUrl: './card-corte.component.html',
  styleUrls: ['./card-corte.component.scss']
})
export class CardCorteComponent implements OnChanges {

@Input() Info: cardCorte = {
    Index: 0,
    Id: '',
    Name: ''
  }

@Output() onClicked:EventEmitter<actionEmitterCorte> = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
  }

}
