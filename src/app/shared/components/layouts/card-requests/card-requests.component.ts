import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheckToSlot, faCircleXmark, faFileArrowDown, faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { cardRequest } from 'src/app/shared/models/card-request.model';
@Component({
  selector: 'app-card-requests',
  templateUrl: './card-requests.component.html',
  styleUrls: ['./card-requests.component.scss']
})
export class CardRequestsComponent implements OnInit {

  faFileArrowDown = faFileArrowDown;
  faCheckToSlot = faCheckToSlot;
  faCircleXmark = faCircleXmark;
  faPeopleArrowsLeftRight = faPeopleArrowsLeftRight;

  @Input() Info: cardRequest = {
    Background: '',
    Date: '',
    Downloaded: false,
    Filename: '',
    Id: '',
    Search: {},
    Title: '',
    Type: ''
  };

  @Output() Download: EventEmitter<cardRequest> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDownload(item: cardRequest): void {
    this.Download.emit(item);
  }


}
