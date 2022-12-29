import { Component, Input, OnInit } from '@angular/core';
import { faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { actionEmitter, cardFilter } from 'src/app/shared/models/card-filters.model';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { cardRequest, searchCURP } from 'src/app/shared/models/card-request.model';
import { ActasService } from '../../services/actas.service';
import { UtilsService } from '../../services/utils.service';
import {MatDialog} from '@angular/material/dialog';
import { ActaRequestComponent } from 'src/app/shared/components/modals/acta-request/acta-request.component';
import { modalRequest } from 'src/app/shared/models/req-modal.model';
import { PreferencesComponent } from 'src/app/shared/components/modals/preferences/preferences.component';
import { TableModalComponent } from 'src/app/shared/components/modals/table-modal/table-modal.component';
import { TransposeComponent } from 'src/app/shared/components/modals/transpose/transpose.component';
import { UsersService } from '../../services/users.service';
import { SimpleMixed } from 'src/app/shared/alerts';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {

  faBook = faBook;
  faFileCirclePlus = faFileCirclePlus;
  

  @Input() Rol: number = 0;

  Search:string = '';
  Peticiones:cardRequest[] = [];
  View:boolean = false;

  CardInfo: cardInfo[] = [
    {
      Id: 0,
      Width: 35,
      Title: 'SOLICITUDES',
      Legend: 'PARA REVISAR O DESCARGAR TUS SOLICITUDES ENVIADAS, DA CLICK EN EL BÓTON.',
      LegendBtn: 'Ver',
      IconBtn: faBook,
      Input: false
    },
    {
      Id: 1,
      Width: 35,
      Title: 'NUEVO',
      Legend: 'PARA SOLICITAR UN ACTA DE NACIMIENTO, DEFUNCIÓN, DIVORCIO Y MATRIMONIO, DA CLICK EN EL BÓTON.',
      LegendBtn: 'Nuevo',
      IconBtn: faFileCirclePlus,
      Input: false
    }
  ];
  CardFilter: cardFilter[] = [
    {
      Id: 0,
      Title: 'Buscador',
      Type: 'Searcher',
      Width: 35,
      Tooltip: 'Buscar por CURP, Tipo de acta o estado',
      Content: null
    },
    {
      Id: 1,
      Title: 'Seleccionar Corte',
      Type: 'Dropdown',
      Width: 15,
      Tooltip: 'Seleccionar fecha de corte',
      Content: {
        Default: '',
        Options: [],
        Key: ''
      }
    }
  ]

  Reqs: modalRequest = {
    Title: 'Solicitar Acta',
    TitleSearch: 'Busqueda por',
    Searches: ['CURP'],
    TitleType: 'Tipo de documento',
    Types: ['NACIMIENTO', 'MATRIMONIO', 'DIVORCIO', 'DEFUNCION'],
    Primary: 'Search',
    DependencySearch: null
  }

  constructor(
    private svc: ActasService, 
    private utils: UtilsService, 
    private dialog: MatDialog,
    private users: UsersService
  ) { }

  async ngOnInit(): Promise<void> {
    
  }

  async getDates(): Promise<void> {
    let _dates: any = await this.svc.getDates().toPromise();
    if(_dates){
      let _n = _dates.find((d:any) => d.deadline == null);
      if(_n) _n.deadline = "Actual";
      let _f = this.CardFilter.find((d:any) => d.Id == 1);
      if(_f){
        _f.Content!.Default = _dates[0].deadline;
        _f.Content!.Options = _dates;
        _f.Content!.Key = "deadline";
        this.getPeticiones(_dates[0].deadline);
      }
    }
  }


  getPeticiones(date:string): void {
    let _date:string = date;
    if(_date == 'Actual') _date = 'null';
    this.svc.getPeticiones(_date).subscribe((data:any) => {
      this.TransformPeticiones(data);
    });
  }

  TransformPeticiones(data: any): void {
      let _date: cardRequest[] = [];

      for (let i = 0; i < data.length; i++) {
        let e:any = data[i];        
        if(e.search == "CURP"){
          const _s: searchCURP = {
            CURP: e.curp,
            Type: e.search,
            State: e.estado
          };

          const _d: cardRequest = {
            ReAssignedLeyend: "Acta",
            Rol: this.Rol,
            Index: i+1,
            Id: e.id,
            Background: `/assets/images/icons/${String(e.type).toLowerCase()}.png`,
            Date: e.createdAt,
            Downloaded: e.downloaded,
            Filename: `${e.curp}.pdf`,
            Search: _s,
            Title: `ACTA DE ${e.type}`,
            Type: e.type,
            Available: e.comments=="Descargado"? true: false,
            Comments: e.comments,
            ReAssigned: e.transposeId != null? true: false
          };
          
          _date.push(_d);
        }
      }


      this.Peticiones = _date;      
  }


  onDownloadRequest(item: cardRequest): void {
    this.onDownloadActa(item.Id, item.Search.CURP);
  }

  onDownloadActa(Id: any, CURP: any): void {
    this.svc.downloadActa(Id).subscribe((data:any) => {
      if(data?.b64){
        this.utils.downloadPDF(data?.b64, CURP);
        let _f = this.CardFilter.find((d:any) => d.Id == 1);
        if(_f) {
          let _date:any = _f.Content?.Default;
          if(_date == 'Actual') _date = 'null';
          this.getPeticiones(_date);
          SimpleMixed("success", "DOCUMENTO DESCARGADO");
        }
      }
    });
  }


  async cardsButtons(item: cardInfo): Promise<void> {
    if(item.Id == 0){
      if(!this.View){
        await this.getDates();
        this.View = true;
      }
      else {
        this.Search = '';
        this.View = false;
      }
    }
    else if (item.Id == 1) {
      this.newRequest();
    }
  }

  newRequest(): void {
    const _req = this.dialog.open(ActaRequestComponent, {
      width: 'md'
    });
    _req.componentInstance.Req = this.Reqs;
    _req.afterClosed().subscribe((data: any) => {
      if(data){
        const _pref = this.dialog.open(PreferencesComponent, {
          width: 'md'
        }); 
        _pref.afterClosed().subscribe((pref: any) => {
          if(pref) {
            this.svc.newRequest(data.Type, data.Search, data.Data, data.State, pref).subscribe((req:any) => {
                if(req) {
                  let _f = this.CardFilter.find((d:any) => d.Id == 1);
                  if(_f) {
                    let _date:any = _f.Content?.Default;
                    if(_date == 'Actual') _date = 'null';
                    this.getPeticiones(_date);
                  }
                  const _result = this.dialog.open(TableModalComponent);
                  _result.componentInstance.Table.Data = [req];


                  _result.afterClosed().subscribe((id: any) => {
                    if(id){
                      this.onDownloadActa(id, req.curp);
                    }
                  });

                }
            });
          }

        });
      } 
    });
  }


  selectDate(item: actionEmitter): void {
    let _f = this.CardFilter.find((d:any) => d.Id == item.Source);
    if(_f?.Content?.Default){
      _f.Content.Default = item.Value;
      this.getPeticiones(item.Value);
    }
  }

  searchDoc(word: actionEmitter): void{
    this.Search = word.Value;
  }


  async reAssign(e: cardRequest): Promise<void> {    
    let _dialog = this.dialog.open(TransposeComponent, {
      width: 'md'
    });

    const _users = await this.users.getFull().toPromise();

    _dialog.componentInstance.Users = _users;

    _dialog.afterClosed().subscribe((data:any) => {
      if(data) {
        this.svc.reAssign(e.Id, data.id).subscribe((re: any) => {
          let _f = this.CardFilter.find((d:any) => d.Id == 1);
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






}
