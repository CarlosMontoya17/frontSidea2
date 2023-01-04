import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appToogleBtn]'
})
export class ToogleBtnDirective {
  private status:boolean = false;
  

  constructor() { }
  @HostListener('click', ['$event']) onClick(e: any) {
    this.status = !this.status;
  }


}
