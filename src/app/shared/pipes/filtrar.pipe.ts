import { Pipe, PipeTransform } from '@angular/core';
import { cardCorte } from '../models/card-corte.model';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, filtro: string): any {

    let cliente: cardCorte[] = []; 
        
    for (let i = 0; i < value.length; i++) {
      let e:any = value[i];
      let name = e.nombre;
      name = name.toLocaleLowerCase();
      if (name.includes(filtro)) {
        cliente.push(value[i]);
      }
    }
    return cliente;
  }
}
