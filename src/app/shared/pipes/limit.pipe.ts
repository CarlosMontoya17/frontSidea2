import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: any[], args: any): any {
    // if(value == undefined) return args;
    const _elemts = value.slice(0, args);
    return _elemts;
  }

}
