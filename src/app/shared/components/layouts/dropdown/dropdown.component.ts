import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() Data: any;
  @Input() DataSelect: any = '';
  @Input() Key: string = '';

  @Output() Select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(e:any): void {
    this.DataSelect = e["corte"];
    this.Select.emit(e);
  }

}
