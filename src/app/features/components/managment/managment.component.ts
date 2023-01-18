import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { storageKeys } from 'src/app/core/models/storageKeys.model';
import { AgreusuarioComponent } from 'src/app/shared/components/modals/agreusuario/agreusuario.component';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { ManagmentService } from '../../services/managment.service';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { EditUserComponent } from 'src/app/shared/components/modals/edit-user/edit-user.component';
import { Router } from '@angular/router';
import { Roles } from 'src/app/core/models/roles.model';
import { AddUserComponent } from 'src/app/shared/components/modals/add-user/add-user.component';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit, OnChanges {
  //variables

  alert: any = [];
  page: number = 1;
  totalLenght: any;
  buscar: string = '';
  MyrolCliente: boolean = true;


  CardInfo: cardInfo[] = [
    {
      Id: 0,
      Width: 60,
      Title: 'AGREGAR USUARIOS',
      Legend: 'PARA DAR DE ALTA A UN NUEVO USUARIO, DA CLICK AL BOTON',
      LegendBtn: 'AGREGAR',
      IconBtn: faUserPlus,
      Input: true,
    }

  ]

  @Input() Username: string = '';
  @Input() myRol: any;
  @Input() myId: any;

  Request: any;

  constructor(
    private dialog: MatDialog,
    private svc: ManagmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getMyUsers();
  }

  ngOnChanges(): void {
    this.getMyUsers();
  }

  getMyUsers(): void {
    this.svc.getMyClient(this.myId).subscribe(data => {
      this.Request = data;
    })
  }

  async cardsButtons(item: cardInfo): Promise<void> {
    if (item.Id == 0) {
      const dialogRef = this.dialog.open(AddUserComponent);
      dialogRef.componentInstance.myData = {
        rol: this.myRol,
        username: this.Username,
        id: this.myId,
        servicios: '',
        status: true
      };
      
      // dialogRef.afterClosed().subscribe((result: any) => {


      //   if (result) {

      //     this.svc.postUsers(result).subscribe((d: any) => {
      //       console.log(result);
            
      //       this.getMyUsers();

      //     })

      //   }
      // });
    }
  }

  editUser(id: any) {
    this.svc.getMyPrices(id).subscribe((data: any) => {
    console.log(data);
    const dialogRef = this.dialog.open(EditUserComponent);
    dialogRef.componentInstance.usernameLocal = data;

    dialogRef.afterClosed().subscribe((data:any) => {
    
     });
    

    });


  }

  async deleteUser(user: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text:
        "Se eliminará al usuario '" +
        user.username +
        "', con nombre de negocio '" +
        user.nombre +
        "'",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user);

        this.svc.deleteUser(user.id).subscribe(
          (e: any) => {
            Swal.fire(
              'Eliminado',
              "Se eliminó al usuario '" + user.username + "'",
              'success'
            );

          },
          (error) => {
            Swal.fire('Error', 'No tienes los permisos suficientes', 'error');
          }

        );

      }
    });
  }

  onKey(e: any): void {
    this.buscar = e;
  }

}