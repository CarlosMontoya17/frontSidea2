import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dating'
})
export class DatingPipe implements PipeTransform {

  transform(value: string): any {
    var datePipe = new DatePipe("en-US");
    return datePipe.transform(value, 'd/M/yy h:mm a');

 }

}
