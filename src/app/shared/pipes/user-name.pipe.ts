import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    args = args.toLowerCase();

    let _f = value.filter((i:any): any => {
      let _i = i.id.toString().toLowerCase();//Busqueda por Id
      let _v = i.nombre.toString().toLowerCase();//Busqueda por Nombre
     let _u = i.username.toString().toLowerCase();//Busqueda por Negocio
     if(_i.includes(args)) return i;
     if(_u.includes(args)) return i;
      if(_v.includes(args)) return i;
    });
    return _f;

  }

}
