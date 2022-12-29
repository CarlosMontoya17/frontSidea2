import { Component, Input, OnInit } from '@angular/core';
import { faAmbulance, faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { actionEmitter, cardFilter } from 'src/app/shared/models/card-filters.model';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { RfcService } from '../../services/rfc.service';
import { cardRequest } from '../../../shared/models/card-request.model';
import { modalRequest } from 'src/app/shared/models/req-modal.model';
import { MatDialog } from '@angular/material/dialog';
import { ActaRequestComponent } from 'src/app/shared/components/modals/acta-request/acta-request.component';
import { TransposeComponent } from 'src/app/shared/components/modals/transpose/transpose.component';
import { UsersService } from '../../services/users.service';
import { UtilsService } from '../../services/utils.service';
import { SimpleMixed } from 'src/app/shared/alerts';

@Component({
  selector: 'app-rfcs',
  templateUrl: './rfcs.component.html',
  styleUrls: ['./rfcs.component.scss']
})
export class RfcsComponent implements OnInit {

  CardInfo: cardInfo[] = [
    {
      Id: 0,
      IconBtn: faBook,
      Input: false,
      Legend: "PARA REVISAR O DESCARGAR TUS SOLICITUDES ENVIADAS, DA CLICK EN EL BÓTON.",
      LegendBtn: "VER",
      Title: "SOLICITUDES",
      Width: 35
    },
    {
      Id: 1,
      IconBtn: faFileCirclePlus,
      Input: false,
      Legend: "PARA SOLICITAR UN RFC DE PERSONA MORAL O FÍSICA, DA CLICK EN EL BÓTON.",
      LegendBtn: "NUEVO",
      Title: "NUEVO",
      Width: 35
    }
  ];
  Filtros: cardFilter[] = [
    { 
      Id: 0,
      Title: "BUSCADOR",
      Tooltip: "BUSCAR POR RFC, CURP O TIPO [ MORAL | FISICA  ]",
      Width: 35,
      Type: 'Searcher',
      Content: null
    }, 
    {
      Id: 1,
      Title: "CORTE",
      Tooltip: "SELECCIONAR FECHA DE CORTE",
      Width: 15,
      Type: "Dropdown",
      Content: {
        Key: '',
        Options: [],
        Default: ''
      }
    }
  ];
  Reqs: modalRequest = {
    Title: 'Solicitar RFC',
    TitleSearch: 'Busqueda por',
    Searches: ['CURP','RFC'],
    TitleType: 'Tipo de persona',
    Types: ['FISICA', 'MORAL'],
    Primary: 'Types',
    DependencySearch: {
      Type: 'MORAL',
      Searches: ['RFC']
    }
  };

  Peticiones:cardRequest[] = [];
  Buscar: string = '';
  View:boolean = false;


  @Input() Rol:number = 0;

  constructor(
    private svc: RfcService,
    private dialog: MatDialog,
    private users: UsersService,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {

  }


  onClick(e: any): void {
    /**
     * Id - 0 ( Ver Solicitudes )
     * Id - 1 (Agregar una nueva solicitud)
     */
    if(e.Id == 0){
      this.View = !this.View;
      if(this.View){
        this.getDates();
      }
    }
    else if(e.Id == 1){
      this.newRequest();
    }    
  }


  getDates(): void {
    this.svc.getDates().subscribe((data:any) => {
      let _actual = data.find((d:any) => d.corte == null);
      if(_actual){
        _actual.corte = "Actual";
      }
      
      let _filtros = this.Filtros.find((d:any) => d.Id == 1);
      if(_filtros) {
        _filtros.Content!.Default = data[0].corte;
        _filtros.Content!.Options = data;
        _filtros.Content!.Key = "corte";
        this.getPeticiones(data[0].corte);
      }        
    } );
  }


  selectDate(item: actionEmitter): void{
    let _f = this.Filtros.find((d:any) => d.Id == item.Source);
    if(_f?.Content?.Default){
      _f.Content.Default = item.Value;
      this.getPeticiones(item.Value);
    }
  }

  getPeticiones(e: any): void {
    let _date: any = null;
    if(e != "Actual") {
      _date = e;
    }
    this.svc.obtenerPeticiones(_date).subscribe((data:any) => {
      this.transformarPeticiones(data);
    });
  }



  transformarPeticiones(p: any): void {
    let info: cardRequest[] = [];
    for (let i = 0; i < p.length; i++) {
      let peticion: cardRequest = {
        Id: p[i].id,
        Background: '/assets/images/icons/rfc.png',
        Available: p[i].comments=="Descargado"? true: false,
        Date: p[i].createdAt,
        Comments: p[i].comments,
        Index: i+1,
        Downloaded: p[i].downloaded,
        Filename: p[i].namefile,
        ReAssigned: p[i].idtranspose!=null? true:false,
        Rol: this.Rol,
        Type: p[i].clasification,
        Search: {
          Type: p[i].search,
          CURP: p[i].data,
          State: ''
        },
        Title: 'REGISTRO FEDERAL DE CONTRIBUYENTES',
        ReAssignedLeyend: ""
      };
      info.push(peticion);
    }
    this.Peticiones = info;
  }


  newRequest(): void {
    const _req = this.dialog.open(ActaRequestComponent, {
      width: 'md'
    });

    _req.componentInstance.Req = this.Reqs;
    _req.afterClosed().subscribe((data:any) => {
      if(data) {
        this.svc.newRequest(data.Type, data.Data, data.Search).subscribe((res:any) => {
          //new table

          let _f = this.Filtros.find((d:any) => d.Id == 1);
          if(_f) {
            let _date:any = _f.Content?.Default;
            if(_date == 'Actual') _date = 'null';
            this.getPeticiones(_date);
          }

          
        });
      }
    });
  }


  onKey(e: any): void {
    this.Buscar = e.Value;
  }

  async reAssing(e: cardRequest): Promise<void> {
    let _dialog = this.dialog.open(TransposeComponent, {
      width: 'md'
    });

    const _users = await this.users.getFull().toPromise();

    _dialog.componentInstance.Users = _users;

    _dialog.afterClosed().subscribe((data:any) => {
      if(data) {
        this.svc.reAssign(e.Id, data.id).subscribe((re: any) => {
          let _f = this.Filtros.find((d:any) => d.Id == 1);
          if(_f) {
            let _date:any = _f.Content?.Default;
            if(_date == 'Actual') _date = 'null';
            this.getPeticiones(_date);
          }
          SimpleMixed("success", "REGISTRO REASIGNADO");
          
        })
      }
    });
  }

  onDownloadRequest(item: cardRequest): void {
    this.onDownload(item.Id, item.Search.CURP);
  }


  onDownload(Id:any, RFC: any): void {
    this.svc.downloadRfc(Id).subscribe((data:any) => {
        this.utils.downloadBlob(data, RFC);
        let _f = this.Filtros.find((d:any) => d.Id == 1);
        if(_f) {
          let _date:any = _f.Content?.Default;
          if(_date == 'Actual') _date = 'null';
          this.getPeticiones(_date);
          SimpleMixed("success", "DOCUMENTO DESCARGADO");
        }
    });
  }





}
