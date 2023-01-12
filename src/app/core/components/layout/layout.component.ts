import { Component, OnInit } from '@angular/core';
import { myInfo } from '../../models/auth.model';
import { storageKeys } from '../../models/storageKeys.model';
import { AuthService } from '../../services/auth.service';
import { Roles } from 'src/app/core/models/roles.model';
import { UtilsService } from 'src/app/features/services/utils.service';
import { SocketService } from '../../services/socket.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  myId: number = 0;
  myRol: number = 0;
  myUsername: string = '';
  myServices: string = '';
  View:number = 0;

  constructor(private auth: AuthService, private utils: UtilsService, private socket: SocketService) { }

  ngOnInit(): void {
    this.getView();
    this.auth.getInfo().subscribe((data:any) => {
      if(data as myInfo) {
        let _info: myInfo = data;
        this.myUsername = _info.username;
        this.myRol = findRol(_info.rol);
        this.myServices = _info.servicios;
        this.myId = _info.id;
        this.SocketView(this.View);
      }
    }, (err:any) => this.utils.ErrorManage(err));
  }


  setView(View: number): void {
    this.View = View;
    localStorage.setItem(storageKeys.View, String(View));
    if(View == 6){
      this.socket.Close(this.myId);
    }
    else {
      this.SocketView(View);
    }
  }

  SocketView(View: number): void {
    this.socket.View(this.myUsername, this.myId, ViewString(View));
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


function ViewString(View: number): any {
  switch(View){
    case 0:
      return "Inicio"
      break;
    case 1:
      return "Administrar"
      break;
    case 2:
      return "Actas"
      break;
    case 3:
      return "Rfcs"
      break;
    case 4:
      return "Corte"
      break;
    case 5:
      return "Documentos"
      break;
      
  }
}
