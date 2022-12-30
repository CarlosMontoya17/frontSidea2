import { Component, OnInit, Input, Output, OnChanges , EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { paysFilter, actionEmitter } from 'src/app/shared/models/pays-filter.model';
@Component({
  selector: 'app-pays-filter',
  templateUrl: './pays-filter.component.html',
  styleUrls: ['./pays-filter.component.scss']
})
export class PaysFilterComponent implements OnChanges {

  faMagnifyingGlass = faMagnifyingGlass;

  @Input() Title: string = 'Filtro';
  @Input() Filters: paysFilter[] = [];

  @Output() onClicked:EventEmitter<actionEmitter> = new EventEmitter();
  @Output() onKey:EventEmitter<actionEmitter> = new EventEmitter();

  constructor() { }

  ngOnChanges(): void {
  }

  onClickDropdown(item: paysFilter, select: any): void {
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
