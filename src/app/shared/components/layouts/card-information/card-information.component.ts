import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { cardInfo } from 'src/app/shared/models/card-information.model';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  @Input() Cards: cardInfo[] = [];
  @Output() onClicked: EventEmitter<cardInfo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pressButton(item: cardInfo): void{
    this.onClicked.emit(item);
  }

}
