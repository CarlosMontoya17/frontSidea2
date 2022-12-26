import { Component, OnInit, Input, Output, OnChanges , EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { actionEmitter, cardFilter } from 'src/app/shared/models/card-filters.model';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss']
})
export class CardFilterComponent implements OnChanges {

  faMagnifyingGlass = faMagnifyingGlass;

  

  @Input() Title: string = 'Filtros';
  @Input() Filters: cardFilter[] = [];

  @Output() onClicked:EventEmitter<actionEmitter> = new EventEmitter();
  @Output() onKey:EventEmitter<actionEmitter> = new EventEmitter();
  constructor() { }

  ngOnChanges(): void {
  }

  onClickDropdown(item: cardFilter, select: any): void {
    if(item.Type == 'Dropdown'){
      let _it = this.Filters.find(d => d.Id == item.Id);
      if(_it?.Content){
        _it.Content.Default = select;
        this.onClicked.emit({Source: item.Id, Value: select});
      }
    }
  }

  onKeySearcher(item:any, word: any): void{
    this.onKey.emit({Source: item.Id, Value: word.target.value});
  }

}
