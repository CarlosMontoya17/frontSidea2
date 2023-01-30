import { Directive, ElementRef, EventEmitter, HostListener, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCurpValidation]'
})
export class CurpValidationDirective{
  

  @Output() appCurpValidation: EventEmitter<boolean> = new EventEmitter(); 
  @Output() appCurpOnPaste: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef)   { }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    let _i = event.clipboardData!.getData('text');
    this.onValid(_i);
    this.appCurpOnPaste.emit(_i);
  }

  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement;
    this.onValid(_i.value);
  }


  onValid(_i: string){
    if(_i){
      const _letters = /^[A-Z]*$/g;
      const _number = /^[0-9]*$/g;
      const _both = /^[A-Z0-9]*$/g;

      let _initials = _i.substring(0, 4);
      let _born = _i.substring(4, 10);
      let _rest = _i.substring(10);

      if(_i.length == 18){
        if(_letters.test(_initials) && _number.test(_born) && _both.test(_rest)) {
          this.appCurpValidation.emit(true);
        }
        else this.appCurpValidation.emit(false);
      }
      else this.appCurpValidation.emit(false);
    }
  }

}
