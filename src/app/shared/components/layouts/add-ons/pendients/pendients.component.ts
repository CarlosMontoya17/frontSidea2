import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { RfcService } from 'src/app/features/services/rfc.service';
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
  @Output() Delete: EventEmitter<addonPendients> = new EventEmitter();
  @Output() Refresh: EventEmitter<any> = new EventEmitter();
  constructor(private svc: RfcService) { 
    this.VMenu.next(false);
  }

  ngOnInit(): void {
    this.VMenu.next(false);
  }

  dMenu(): void {
    this.Toogle = !this.Toogle;
    if(this.Toogle){
      this.VMenu.next(true);
      this.svc.setRefreshing(true);
      this.Refresh.emit();
    }
    else if(!this.Toogle) {
      //this.svc.setRefreshing(false);
      this.VMenu.next(false);
    }        
  }

  reTry(item: addonPendients): void {
    this.ReTry.emit(item);
  }

  delete(item: addonPendients): void {
    this.Delete.emit(item);
  }



}
