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


  noDownload: boolean = false;
  noAssign: boolean = false;

  @Input() Title: string = 'Filtros';
  @Input() Filters: cardFilter[] = [];
  @Input() Rol: number = 0;
  @Input() ModeView: string = "Tarjeta";

  @Output() onClicked:EventEmitter<actionEmitter> = new EventEmitter();
  @Output() onKey:EventEmitter<actionEmitter> = new EventEmitter();
  @Output() noDownloaded: EventEmitter<boolean> = new EventEmitter();
  @Output() noAssigned: EventEmitter<boolean> = new EventEmitter();
  @Output() onModeView: EventEmitter<string> = new EventEmitter();
  
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

  onFilterDwn(): void {
      this.noDownload = !this.noDownload;
      this.noDownloaded.emit(this.noDownload);
  }
  onFilterAssgn(): void {
    this.noAssign = !this.noAssign;
    this.noAssigned.emit(this.noAssign);
  }

  onChangeView(): void {
      if(this.ModeView == "Tarjeta"){
        this.ModeView = "Lista"
      }
      else if(this.ModeView == "Lista"){
        this.ModeView = "Tarjeta"
      }
      this.onModeView.emit(this.ModeView);
  }

  onKeySearcher(item:any, word: any): void{
    this.onKey.emit({Source: item.Id, Value: word.target.value});
  }

}
