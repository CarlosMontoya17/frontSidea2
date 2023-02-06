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
  ModeView: string = "Tarjeta";
  // Rol
  @Input() Rol: number = 0;


  CardInfo: cardInfo[] = [
    {
      Id: 0,
      Width: 60,
      Title: 'AGREGAR USUARIOS',
      Legend: 'PARA DAR DE ALTA A UN NUEVO USUARIO, DA CLICK AL BOTON',
      LegendBtn: 'AGREGAR',
      IconBtn: faUserPlus,
      Input: true,
      HideBtn: true
    }

  ]
  

  @Input() Username: string = '';
  @Input() myRol: any;
  @Input() myId: any;

  Request: any;
  tipodeservicio: any = 'Seleccione el servicio';
  roles:any;
  
  userToUpdateServices: any = [];
  showEditServicesModal: boolean = false;
  constructor(
    private dialog: MatDialog,
    private svc: ManagmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.getMyUsers();
    this.CreateBtn();
  }

  ngOnChanges(): void {
    this.getMyUsers();
    this.CreateBtn();
  }

  getMyUsers(): void {
    this.svc.getMyClient().subscribe(data => {
      this.Request = data;
      console.log(this.Request);
      console.log(this.roles);
      if (this.roles = "Admin") {
     //   this.Request.rol;
      //  this.getMyUsers();
      }
      else if (this.roles =='Asesor') {
      //  this.Request.rol;
       // this.getMyUsers();
      }
      
    })
  }

  CreateBtn(): void {
    if(this.myRol == 1 || this.myRol == 2){
      this.CardInfo.find(d => d.Id == 0)!.HideBtn = false;
    }
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

  async servicios(id:any,username:any,servicios:any){
    this.userToUpdateServices = [id, username, servicios];
    console.log(this.userToUpdateServices);
    
    this.showEditServicesModal = true;


  }

  updateservicios() {
    if (this.tipodeservicio == 'Seleccione el servicio') {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Seleccione el nuevo servicio',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      let newService = '';

      switch (this.tipodeservicio) {
        case 'all':
          newService = 'Todos';
          break;
        case 'actas':
          newService = 'Sólo Actas';
          break;
        case 'rfc':
          newService = 'Sólo RFC';
          break;
        case 'none':
          newService = 'Ninguno';
          break;
        default:
          newService = '';
          break;
      }

      this.svc
        .changeservicios(this.userToUpdateServices[0], this.tipodeservicio)
        .subscribe((data: any) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Se actualizó el servicio para ${this.userToUpdateServices[1]} a ${newService}`,
            showConfirmButton: false,
            timer: 1500,
          });

       //   this.reloadCurrentRoute();
        });
    }

    //this.reloadCurrentRoute();
  }
  closeServiceModal() {
    this.showEditServicesModal = false;
  }

  onKey(e: any): void {
    this.buscar = e;
  }

}