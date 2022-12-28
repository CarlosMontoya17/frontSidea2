import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheckToSlot, faCircleXmark, faFileArrowDown, faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { SimpleAlert } from 'src/app/shared/alerts';
import { cardRequest } from 'src/app/shared/models/card-request.model';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ErrorSimpleComponent } from '../../modals/error-simple/error-simple.component';
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
    Rol: 0,
    Index: 0,
    Background: '',
    Date: '',
    Downloaded: false,
    Filename: '',
    Id: '',
    Search: {},
    Title: '',
    Type: '',
    Available: false,
    Comments: '',
    ReAssigned: false
  };

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
