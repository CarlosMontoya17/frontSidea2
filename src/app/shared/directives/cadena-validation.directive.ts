import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCadenaValidation]'
})
export class CadenaValidationDirective {

  @Output() appCadenaValidation: EventEmitter<boolean> = new EventEmitter();
  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event']) onKey(e: any) {
    let _i = this.el.nativeElement;
    if(_i){
      const _number = /^[0-9]*$/g;

      if(_i.value.length == 20){
        if(_number.test(_i.value)) {
          this.appCadenaValidation.emit(true);
        }
        else this.appCadenaValidation.emit(false);
      }
      else this.appCadenaValidation.emit(false);
    }
  }

}
