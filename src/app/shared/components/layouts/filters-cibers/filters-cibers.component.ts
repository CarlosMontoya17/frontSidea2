import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { utils, writeFileXLSX } from 'xlsx';
import { InputColorsComponent } from '../../modals/input-colors/input-colors.component';

@Component({
  selector: 'app-filters-cibers',
  templateUrl: './filters-cibers.component.html',
  styleUrls: ['./filters-cibers.component.scss']
})
export class FiltersCibersComponent implements OnInit, OnChanges {
  @ViewChild('myCard') myCard!: ElementRef;
  @Input() Clientes: any;
  @Input() Fechas: any;
  @Input() FechaSelect: any;
  @Input() Key: string = 'corte';
  @Input() Title: string = 'Clientes';

  @Output() onDate: EventEmitter<string> = new EventEmitter();
  @Output() onCiber: EventEmitter<any> = new EventEmitter();
  @Output() onFloat: EventEmitter<any> = new EventEmitter();

  Buscar: string = '';
  CiberSelect: string = '';
  DateSelect: string = '';

  private Show = new BehaviorSubject<boolean>(true);
  Show$ = this.Show.asObservable();

  
  private Draggable = new BehaviorSubject<boolean>(false);
  Draggable$ = this.Draggable.asObservable();

  Position = {x:0, y: 0};




  constructor(

  ) { }

  ngOnInit(): void {

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.FechaSelect);

  }



  onShowHide(): void {
    let _current;
    this.Show$.subscribe((data: boolean) => {
      _current = data;
    });
    this.Show.next(!_current);
  }

  onDraggable(): void {
    let _current;
    this.Draggable$.subscribe((data: boolean) => {
      _current = data;
    });    
    if(_current){
      this.Position = { x:0, y:0 };
      this.onFloat.emit(!_current);
    }
    else {
      this.onFloat.emit(!_current);
    }

    this.Draggable.next(!_current);
  }

  selectDate(date: any): void {
    this.onDate.emit(date[this.Key]);
  }

  onSaveExcel(): void {
    let _object = [];
    for (let i = 0; i < this.Clientes.length; i++) {
      const _e = this.Clientes[i];
      _object.push({
        Id: String(_e.id),
        Nombre: _e.nombre
      });
    }  
    const _ws = utils.json_to_sheet(_object);
    const _wb = utils.book_new();
    utils.book_append_sheet(_wb, _ws, "Datos");
    writeFileXLSX(_wb, `Lista_clientes.xlsx`);
  }

  onKey(v: any): void {
    this.Buscar = v;    
  }

  selectCiber(client: any): void {
    this.CiberSelect = client;
    this.onCiber.emit({
      corte: this.FechaSelect,
      client: client
    });
  }

}
