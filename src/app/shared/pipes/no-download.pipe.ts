import { Pipe, PipeTransform } from '@angular/core';
import { cardRequest } from '../models/card-request.model';

@Pipe({
  name: 'noDownload'
})
export class NoDownloadPipe implements PipeTransform {

  transform(value: cardRequest[], args: boolean): any {
    if (!args) return value;
    else if (args) {
      let _f = value.filter((i: any): any => {
        return i.Downloaded == false && i.Available == true;
      });
      return _f;
    }
  }

}
