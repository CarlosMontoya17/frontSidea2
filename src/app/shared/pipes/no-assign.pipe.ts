import { Pipe, PipeTransform } from '@angular/core';
import { cardRequest } from '../models/card-request.model';

@Pipe({
  name: 'noAssign',
})
export class NoAssignPipe implements PipeTransform {
  transform(value: cardRequest[], args: boolean): any {
    if (!args) return value;
    else if (args) {
      let _f = value.filter((i: any): any => {
        return i.ReAssigned == false && i.Available == true;
      });
      return _f;
    }
  }
}
