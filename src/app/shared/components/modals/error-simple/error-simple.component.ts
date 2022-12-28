import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-simple',
  templateUrl: './error-simple.component.html',
  styleUrls: ['./error-simple.component.scss']
})
export class ErrorSimpleComponent implements OnInit {

  
  faXmark = faXmark;
  @Input() Title: string = 'ERROR';
  @Input() Content: string = '';
  @Input() Actions: boolean = false;
  @Output() onAccept: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onAccepted(): void {
    if(this.Actions) this.onAccept.emit(true);
  }

}
