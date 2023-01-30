import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appCadenaValidation]'
})
export class CadenaValidationDirective {

  @Output() appCadenaValidation: EventEmitter<boolean> = new EventEmitter();
  @Output() appCadenaOnPaste: EventEmitter<string> = new EventEmitter();


  constructor(private el: ElementRef) { }
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    let _i = event.clipboardData!.getData('text');
    this.onValid(_i);
    this.appCadenaOnPaste.emit(_i);
  }

  @HostListener('keyup', ['$event']) onKey(e: any) {
    let _i = this.el.nativeElement.value;
    this.onValid(_i);
  }


  onValid(_i: string){
    if(_i){
      const _number = /^[0-9]*$/g;

      if(_i.length == 20){
        if(_number.test(_i)) {
          this.appCadenaValidation.emit(true);
        }
        else this.appCadenaValidation.emit(false);
      }
      else this.appCadenaValidation.emit(false);
    }
  }

}
