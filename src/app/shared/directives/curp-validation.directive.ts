import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCurpValidation]'
})
export class CurpValidationDirective {
  

  @Output() appCurpValidation: EventEmitter<boolean> = new EventEmitter(); 

  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement;
    if(_i){
      const _letters = /^[A-Z]*$/g;
      const _number = /^[0-9]*$/g;
      const _both = /^[A-Z0-9]*$/g;

      let _initials = _i.value.substring(0, 4);
      let _born = _i.value.substring(4, 10);
      let _rest = _i.value.substring(10);

      if(_i.value.length == 18){
        if(_letters.test(_initials) && _number.test(_born) && _both.test(_rest)) {
          this.appCurpValidation.emit(true);
        }
        else this.appCurpValidation.emit(false);
      }
      else this.appCurpValidation.emit(false);
    }
  }
}
