import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRfcValidation]'
})
export class RfcValidationDirective {

  @Output() appRfcValidation: EventEmitter<boolean> = new EventEmitter(); 

  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement;
    if(_i){
      const _both = /^[A-Z0-9]*$/g;

      
      if(_i.value.length == 12){
        if(_both.test(_i.value)) {
          this.appRfcValidation.emit(true);
        }
        else this.appRfcValidation.emit(false);
      }
      else this.appRfcValidation.emit(false);
    }
  }
}
