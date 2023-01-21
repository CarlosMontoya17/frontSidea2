import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { ManagmentService } from '../../services/managment.service';
import Swal from 'sweetalert2';
import { EditUserComponent } from 'src/app/shared/components/modals/edit-user/edit-user.component';
import { Router } from '@angular/router';
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
    this.svc.getMyClient().subscribe(data => {
      this.Request = data;
    })
  }

  async cardsButtons(item: cardInfo): Promise<void> {
    if (item.Id == 0) {
      const _dialog = this.dialog.open(AddUserComponent);
      _dialog.componentInstance.myData = {
        rol: this.myRol,
        username: this.Username,
        id: this.myId,
        servicios: '',
        status: true
      };

      _dialog.afterClosed().subscribe((data:any) => {
        if(data){
          this.svc.addUser(data).subscribe(() => {
            this.getMyUsers();
          });
        }
      });
    }
  }

  editUser(id: any) {
    this.svc.getData(id).subscribe(async (data: any) => {
        if(data){
          let _super = await this.svc.getData(data.idSuper).toPromise();        const _edit = this.dialog.open(EditUserComponent, {width: 'md'});
          _edit.componentInstance.DataEdit = data;
          _edit.componentInstance.myData = {
            rol: _super.rol,
            username: _super.username,
            id: _super.id,
            servicios: '',
            status: _super.status
          };

          _edit.afterClosed().subscribe((save:any) => {
            if(save) {
              this.svc.editUser(save, data.id).subscribe(() => {
                this.getMyUsers();
              });
            }
          })
        }
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