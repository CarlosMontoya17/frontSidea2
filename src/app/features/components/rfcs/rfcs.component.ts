import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
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
import { addonPendients } from 'src/app/shared/models/pendients.model';

import { TableModalComponent } from 'src/app/shared/components/modals/table-modal/table-modal.component';
import { tableModal } from 'src/app/shared/models/table.model';

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
      Width: 35,
      HideBtn: false
    },
    {
      Id: 1,
      IconBtn: faFileCirclePlus,
      Input: false,
      Legend: "PARA SOLICITAR UN RFC DE PERSONA MORAL O FÍSICA, DA CLICK EN EL BÓTON.",
      LegendBtn: "NUEVO",
      Title: "NUEVO",
      Width: 35,
      HideBtn: false
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
    Types: ['FISICA'],
    Primary: 'Types',
    DependencySearch: {
      Type: 'MORAL',
      Searches: ['RFC']
    }
  };

  Peticiones:cardRequest[] = [];
  Buscar: string = '';
  View:boolean = false;
  Pendientes: addonPendients[] = [];

  @Input() Rol:number = 0;
  @Input() Id:number = 0;

  // Filters
  ModeView: string = "Tarjeta";
  noDownloaded: boolean = false;
  noAssign: boolean = false;
  limit: number = 20;

  constructor(
    private svc: RfcService,
    private dialog: MatDialog,
    private users: UsersService,
    private utils: UtilsService,
    
  ) {

 
   }

  ngOnInit(): void {
    
    if(localStorage.getItem("mv")){
      this.ModeView = localStorage.getItem("mv")!;
    }
  }

  
  modeView(e: string): void {
    this.ModeView = e;
    localStorage.setItem("mv", e);
  }


  noDownload(e: boolean): void {
    this.noDownloaded = e;
  }

  noAssigned(e: boolean): void{
    this.noAssign = e;
  }


  onScroll(event: any) {
    let pos = event.srcElement.scrollTop;
    let max = event.srcElement.scrollHeight - event.srcElement.offsetHeight;      
    if(pos == max) {
      this.limit += 10;
    }
   }

  onClick(e: any): void {
    /**
     * Id - 0 ( Ver Solicitudes )
     * Id - 1 (Agregar una nueva solicitud)
     */
    if(e.Id == 0){
      this.View = !this.View;
      if(this.View){
        this.svc.setRefreshing(true);
        this.getDates();
      }
    }
    else if(e.Id == 1){
      this.newRequest();
    }    
  }


  getDates(): void {
    this.svc.getDates().subscribe((data:any) => {

      
      let _actual = data.find((d:any) => d.deadline == null);
      if(_actual){
        _actual.deadline = "Actual";
      }
      
      let _filtros = this.Filtros.find((d:any) => d.Id == 1);
      if(_filtros) {
        _filtros.Content!.Default = data[0].deadline;
        _filtros.Content!.Options = data;
        _filtros.Content!.Key = "deadline";
        this.getPeticiones(data[0].deadline);
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
        Date: String(p[i].createdAt).substring(0, p[i].createdAt.length - 3),
        Comments: p[i].comments,
        Index: i+1,
        Downloaded: p[i].downloaded,
        Filename: `${p[i].search=="CURP"? p[i].curp: p[i].rfc}.pdf`,
        ReAssigned: p[i].transposeId==null? false:true,
        Rol: this.Rol,
        Type: p[i].type,
        Search: {
          Type: p[i].search,
          CURP: p[i].search=="CURP"? p[i].curp: p[i].rfc,
          State: p[i].estado
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
        var _type = data.Type;
        var _curp = data.Search=="CURP"? data.Data: ''; 
        var _rfc = data.Search=="RFC"? data.Data:'';
        
        
        this.svc.newRequest(_type, _curp, _rfc).subscribe((res:any) => {
          console.log(res);
          
          if(typeof(res) == "object") {
            //new table
            let _f = this.Filtros.find((d:any) => d.Id == 1);
            if(_f) {

              let _date:any = _f.Content?.Default;
              if(_date == 'Actual') _date = 'null';
              this.getPeticiones(_date);
            }

            const _table: tableModal = {
              Columns: [ 
                { Display: "Nombres", Key: "nombres" },
                { Display: "Apellidos", Key: "apellidos" },
                { Display: "RFC", Key: "rfc" },
                { Display: "Ciudad", Key: "ciudad" }
              ],
              Data: [res]
            } 
            
              const _result = this.dialog.open(TableModalComponent);
              _result.componentInstance.Table = _table;


              _result.afterClosed().subscribe((id: any) => {
                if(id){
                  this.onDownload(id, res.rfc);
                }
              });
          } 
          else {
         
      
            
            SimpleMixed("error", "VUELVE A INTENTAR POR FAVOR");
          }         
        }, (err:any) =>{ 
          this.utils.ErrorManage(err); 
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
      // console.log(data);
      
      if(data) {
        this.svc.reAssign(e.Id, data.id).subscribe((re: any) => {
          let _f = this.Filtros.find((d:any) => d.Id == 1);
          if(_f) {
            let _date:any = _f.Content?.Default;
            if(_date == 'Actual') _date = 'null';
            this.getPeticiones(_date);
          }
          SimpleMixed("success", "REGISTRO REASIGNADO");
          
        }, (err:any) => this.utils.ErrorManage(err))
      }
    });
  }

  onDownloadRequest(item: cardRequest): void {
    this.onDownload(item.Id, item.Search.CURP);
 
    
  }


  onDownload(Id:any, RFC: any): void {

    this.svc.downloadRfc(Id).subscribe((data:any) => {
      if(data?.b64){
        
  
        this.utils.downloadPDF(data?.b64, RFC);
        let _f = this.Filtros.find((d:any) => d.Id == 1);
        if(_f) {
          let _date:any = _f.Content?.Default;
          if(_date == 'Actual') _date = 'null';
          this.getPeticiones(_date);
          SimpleMixed("success", "DOCUMENTO DESCARGADO");
        }
      }
    }, (err:any) => this.utils.ErrorManage(err));
        // if(data?.b64){
        //   this.utils.downloadPDF(data?.b64, RFC);
        //   let _f = this.Filtros.find((d:any) => d.Id == 1);
        //   if(_f) {
        //     let _date:any = _f.Content?.Default;
        //     if(_date == 'Actual') _date = 'null';
        //     this.getPeticiones(_date);
        //     SimpleMixed("success", "DOCUMENTO DESCARGADO");
        //   }
        // }
  }

  /** Pendientes */



  ReTrying(item: addonPendients): void {
    this.svc.updatePendient(item).subscribe((data:any) => {
      this.getPendients();
    });
  }

  delete(item: addonPendients): void {
    this.svc.deletePendient(item.Id).subscribe((data:any) => {
      this.getPendients();
    });
  }


  getPendients(): void {
    this.svc.getPendients().subscribe((data:any) => {
      if(data){

        let _pendients: addonPendients[] = [];
        data.forEach((element: any) => {
           const _p: addonPendients = {
            Id: element.Id,
            CURP: element.CURP,
            RFC: element.RFC,
            Type: element.Type,
            Status: element.Status
           };
           _pendients.push(_p);
         });

        this.Pendientes = _pendients;
      }
    });
  }

 




}
