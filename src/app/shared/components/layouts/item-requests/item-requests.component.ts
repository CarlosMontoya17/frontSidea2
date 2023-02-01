import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCheckToSlot, faCircleXmark, faCity, faClock, faFileArrowDown, faPaperclip, faPeopleArrowsLeftRight, faPerson, faRotate } from '@fortawesome/free-solid-svg-icons';
import { cardRequest } from 'src/app/shared/models/card-request.model';
import { ErrorSimpleComponent } from '../../modals/error-simple/error-simple.component';

@Component({
  selector: 'app-item-requests',
  templateUrl: './item-requests.component.html',
  styleUrls: ['./item-requests.component.scss']
})
export class ItemRequestsComponent implements OnInit {
  // New
  faPaperclip = faPaperclip;
  faClock = faClock;
  faCity = faCity;
  faPerson = faPerson;

  faFileArrowDown = faFileArrowDown;
  faCheckToSlot = faCheckToSlot;
  faCircleXmark = faCircleXmark;
  faPeopleArrowsLeftRight = faPeopleArrowsLeftRight;
  faRotate = faRotate;

  @Input() Info!: cardRequest;
  @Output() Download: EventEmitter<cardRequest> = new EventEmitter();
  @Output() ReAsign: EventEmitter<cardRequest> = new EventEmitter();
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDownload(item: cardRequest): void {
    this.Download.emit(item);
  }

  onError(item: cardRequest): void {
    // SimpleAlert("error", "");
    const _dialog = this.dialog.open(ErrorSimpleComponent);
    _dialog.componentInstance.Content = item.Comments;
  }

  onReasign(item: cardRequest): void {
    this.ReAsign.emit(item);
  }

}
