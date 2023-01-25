import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
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
  @Output() Key: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  pressButton(item: cardInfo): void{
    this.onClicked.emit(item);
  }

  onKey(key:any): void {
    let _value = key.target.value;
    this.Key.emit(_value);
    // let _v = e.target.value;    
    // this.onKey.emit({ Source: card.Id, Key: _v });

  }

}
