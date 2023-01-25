import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { cardInfo } from 'src/app/shared/models/card-information.model';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  @Input() Cards: cardInfo[] = [];
  @Output() onClicked: EventEmitter<cardInfo> = new EventEmitter();
  @Output() onKey: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  pressButton(item: cardInfo): void{
    this.onClicked.emit(item);
  }

  pressKey(e:any, card:cardInfo): void {
    let _v = e.target.value;    
    this.onKey.emit({ Source: card.Id, Key: _v });

  }

}
