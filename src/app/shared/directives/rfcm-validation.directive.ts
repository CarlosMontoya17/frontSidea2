import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appRfcmValidation]'
})
export class RfcmValidationDirective {

  @Output() appRfcmValidation: EventEmitter<boolean> = new EventEmitter(); 
  @Output() appRfcmOnPaste: EventEmitter<string> = new EventEmitter();


  constructor(private el: ElementRef) { }
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    let _i = event.clipboardData!.getData('text');
    this.onValid(_i);
    this.appRfcmOnPaste.emit(_i);
  }

  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement.value;
    this.onValid(_i);
  }

  onValid(_i: string){
    if(_i){
      const _both = /^[A-Z0-9]*$/g;
      if(_i.length == 12){
        if(_both.test(_i)) {
          this.appRfcmValidation.emit(true);
        }
        else this.appRfcmValidation.emit(false);
      }
      else this.appRfcmValidation.emit(false);
    }
  }

}
