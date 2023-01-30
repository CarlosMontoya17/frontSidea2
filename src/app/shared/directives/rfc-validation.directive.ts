import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRfcValidation]'
})
export class RfcValidationDirective {

  @Output() appRfcValidation: EventEmitter<boolean> = new EventEmitter(); 
  @Output() appRfcOnPaste: EventEmitter<string> = new EventEmitter();

  constructor(private el: ElementRef) { }
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    let _i = event.clipboardData!.getData('text');
    this.onValid(_i);
    this.appRfcOnPaste.emit(_i);
  }

  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement.value;
    this.onValid(_i);
  }

  onValid(_i: string){
    if(_i){
      const _both = /^[A-Z0-9]*$/g;

      if(_i.length == 13){
        if(_both.test(_i)) {
          this.appRfcValidation.emit(true);
        }
        else this.appRfcValidation.emit(false);
      }
      else this.appRfcValidation.emit(false);
    }
  }
}
