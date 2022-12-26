import { Component, OnInit } from '@angular/core';
import { myInfo } from '../../models/auth.model';
import { storageKeys } from '../../models/storageKeys.model';
import { AuthService } from '../../services/auth.service';
import { Roles } from 'src/app/core/models/roles.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  myRol: number = 0;
  myUsername: string = '';
  myServices: string = '';
  View:number = 0;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getView();
    this.auth.getInfo().subscribe((data:any) => {
      if(data as myInfo) {
        let _info: myInfo = data;
        this.myUsername = _info.username;
        this.myRol = findRol(_info.rol);
        this.myServices = _info.servicios;
      }
    });
  }


  setView(View: number): void {
    this.View = View;
    localStorage.setItem(storageKeys.View, String(View));
  }

  getView(): void {
    let _view = localStorage.getItem(storageKeys.View);
    if(_view) {
      this.View = Number(_view);
    }
  }

}


function findRol(key: string): number{
  switch (key) {
    case "Admin":
        return Roles.Admin;
      break;
    case "Supervisor":
      return Roles.Supervisor;
      break;
    case "Asesor":
      return Roles.Asesor;
      break;
    case "Cliente":
      return Roles.Cliente;
      break;
    case "Sucursal":
      return Roles.Sucursal;
      break;
    case "Empleado":
      return Roles.Empleado;
      break;
    default:
      break;
  }
  return 0;
}
