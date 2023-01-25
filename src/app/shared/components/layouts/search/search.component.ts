import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;

  @Output() Key: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onKey(key: any): void {
    let _value = key.target.value;
      this.Key.emit(_value);
      //console.log(_value);
      
  }

}
