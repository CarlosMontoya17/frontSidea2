import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { addonPendients } from 'src/app/shared/models/pendients.model';

@Component({
  selector: 'app-pendients',
  templateUrl: './pendients.component.html',
  styleUrls: ['./pendients.component.scss']
})
export class PendientsComponent implements OnInit {
  @ViewChild('asMenu') Menu!: ElementRef;

  Toogle: boolean = false;
  private VMenu = new BehaviorSubject<boolean>(false);
  VM$ = this.VMenu.asObservable();  

  @Input() Pnds: addonPendients[] = [];
  @Output() ReTry: EventEmitter<addonPendients> = new EventEmitter();

  constructor(private render: Renderer2) { 
    this.VMenu.next(false);
  }

  ngOnInit(): void {
    this.VMenu.next(false);
  }

  dMenu(): void {
    this.Toogle = !this.Toogle;
    if(this.Toogle){
      this.VMenu.next(true);
    }
    else if(!this.Toogle) {
      this.VMenu.next(false);
    }        
  }

  reTry(item: addonPendients): void {
    this.ReTry.emit(item);
  }



}
