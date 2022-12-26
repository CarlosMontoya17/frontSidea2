import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperText]'
})
export class UpperTextDirective {

  constructor(private el: ElementRef) { }
  @HostListener('keyup', ['$event']) onKey(e: any){
    let _i = this.el.nativeElement;
    if(_i){
      _i.value = e.target.value.toUpperCase();
    }
  }

}
