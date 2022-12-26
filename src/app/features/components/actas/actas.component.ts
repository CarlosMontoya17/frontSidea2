import { Component, OnInit } from '@angular/core';
import { faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { actionEmitter, cardFilter } from 'src/app/shared/models/card-filters.model';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { cardRequest, searchCURP } from 'src/app/shared/models/card-request.model';
import { ActasService } from '../../services/actas.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-actas',
  templateUrl: './actas.component.html',
  styleUrls: ['./actas.component.scss']
})
export class ActasComponent implements OnInit {

  faBook = faBook;
  faFileCirclePlus = faFileCirclePlus;
  

  Search:string = '';
  Peticiones:cardRequest[] = [];
  View:number = 0;

  CardInfo: cardInfo[] = [
    {
      Id: 0,
      Width: 35,
      Title: 'SOLICITUDES',
      Legend: 'PARA REVISAR O DESCARGAR TUS SOLICITUDES ENVIADAS, DA CLICK EN EL BÓTON.',
      LegendBtn: 'Ver',
      IconBtn: faBook
    },
    {
      Id: 1,
      Width: 35,
      Title: 'NUEVO',
      Legend: 'PARA SOLICITAR UN ACTA DE NACIMIENTO, DEFUNCIÓN, DIVORCIO Y MATRIMONIO, DA CLICK EN EL BÓTON.',
      LegendBtn: 'Nuevo',
      IconBtn: faFileCirclePlus
    }
  ];
  CardFilter: cardFilter[] = [
    {
      Id: 0,
      Title: 'Buscador',
      Type: 'Searcher',
      Width: 35,
      Content: null
    },
    {
      Id: 1,
      Title: 'Seleccionar Corte',
      Type: 'Dropdown',
      Width: 15,
      Content: {
        Default: '',
        Options: [],
        Key: ''
      }
    }
  ]

  constructor(private svc: ActasService, private utils: UtilsService) { }

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
      data.forEach((e: any) => {
        if(e.search == "CURP"){
          const _s: searchCURP = {
            CURP: e.curp,
            Type: e.type,
            State: e.estado
          };

          const _d: cardRequest = {
            Id: e.id,
            Background: `/assets/images/icons/${String(e.type).toLowerCase()}.png`,
            Date: e.createdAt,
            Downloaded: e.downloaded,
            Filename: `${e.curp}.pdf`,
            Search: _s,
            Title: `ACTA DE ${e.type}`,
            Type: e.type,
            Available: e.comments=="Descargado"? true: false,
            Comments: e.comments
          };
          
          _date.push(_d);
        }
      });


      this.Peticiones = _date;      
  }


  onDownloadRequest(item: cardRequest): void {
      this.svc.downloadActa(item.Id).subscribe((data:any) => {
        if(data?.b64){
          this.utils.downloadPDF(data?.b64, item.Search.CURP);
          let _f = this.CardFilter.find((d:any) => d.Id == 1);
          if(_f) {
            let _date:any = _f.Content?.Default;
            if(_date == 'Actual') _date = 'null';
            this.getPeticiones(_date);
          }
        }
      });
  }


  async cardsButtons(item: cardInfo): Promise<void> {
    if(item.Id == 0){
      if(this.View == 0){
        await this.getDates();
        this.View = 2;
      }
      else this.View = 0;
    }
  }

  selectDate(item: actionEmitter): void {
    let _f = this.CardFilter.find((d:any) => d.Id == item.Source);
    if(_f?.Content?.Default){
      _f.Content.Default = item.Value;
      this.getPeticiones(item.Value);
    }
  }

  searchDoc(word: actionEmitter): void{
    console.log(word);
  }



}
