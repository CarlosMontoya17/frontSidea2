import { Pipe, PipeTransform } from '@angular/core';
import { cardRequest } from '../models/card-request.model';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: cardRequest[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    args = args.toLowerCase();

    let _f = value.filter((i:any): any => {
      let _v = Object.values(i['Search']).toString().toLowerCase();
      if(_v.includes(args)) return _v;          
    });
    return _f;

  }

}
