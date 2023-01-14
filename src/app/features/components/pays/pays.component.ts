import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { PaysService } from '../../services/pays.service';
import { cardCorte } from 'src/app/shared/models/card-corte.model';
import { detailsCorte } from 'src/app/shared/models/details-corte.model';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { ciber } from 'src/app/shared/models/ciber.model';
import { utils, writeFileXLSX } from 'xlsx';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent implements OnInit {

  @Input() Username: string = '';
  CardInfo: cardInfo[] = [
    {
      Id: 0,
      IconBtn: faMagnifyingGlass,
      Input: false,
      Legend: "PARA REALIZAR CORTES GENERALES, DA CLICK EN EL BÓTON.",
      LegendBtn: "VER",
      Title: "CORTE GENERAL",
      Width: 35
    },
    {
      Id: 1,
      IconBtn: faMagnifyingGlass,
      Input: false,
      Legend: "PARA REALIZAR CORTES PERSONALES, DA CLICK EN EL BÓTON.",
      LegendBtn: "VER",
      Title: "CORTE PERSONAL",
      Width: 35
    }
  ];



  Cibers: ciber[] = [];

  ShowFiltersG: boolean = false;
  ShowFiltersP: boolean = false;

  ActiveFilter: number = 0;


  /** News */
  Floating: boolean = false;
  CClientes: boolean = false;
  CPropio: boolean = false;

  /**Dates */
  MyDates: any;
  CDates: any;
  DateSelect: string = '';
  NameSelect: string = '';

  /** Objects Data */
  Clientes: any = [];

  /** Table Data */
  showTable = false;
  rowData:detailsCorte[] = [];

  constructor(
    private svc: PaysService,
    private utils: UtilsService
  ) { }

  ngOnInit(): void {
  }

  /**New */
  getMyDates(): void {
    this.svc.getMyDates().subscribe((data: any) => {
      if (data) {
        if (data[0].corte == null) {
          data[0].corte = 'Actual';
        }
        this.MyDates = data;
        this.DateSelect = data[0].corte;        
        this.getMyCorte(data[0]);
      }
    }, (err: any) => {
      this.utils.ErrorManage(err);
    });
  }

  getClientDates(): void {
    this.svc.getDates().subscribe((data: any) => {
      if (data) {
        if (data[0].corte == null) {
          data[0].corte = 'Actual';
        }
        this.CDates = data;
        this.DateSelect = data[0].corte;
        this.getClientsOnDate(this.DateSelect);
      }
    }, (err: any) => {
      this.utils.ErrorManage(err);
    })
  }


  getClientsOnDate(date: any): void {
    let _date: any;
    if (date == 'Actual') _date = null;
    else _date = date;
    this.svc.getClientsOnDate(_date).subscribe((data: any) => {
      this.Clientes = data;
    });
  }


  getMyCorte(date: any): void {
    let _date: any;
    if (date.corte == 'Actual') _date = null;
    else _date = date.corte;
    this.svc.getMyCorte(_date).subscribe((data: any) => {
        let _rowData:detailsCorte[] = [];
        for (let i = 0; i < data.length; i++) {
          const e = data[i];
          _rowData.push({
            Index: i+1,
            Curp: e.dataset,
            Documento: e.document,
            Estado: e.state,
            Fecha: String(e.createdAt).substring(0, String(e.createdAt).length - 1),
            Nombres: e.nameinside,
            Precio: e.price0,
            Marked: false
          });
        }
        this.rowData = _rowData;
        this.NameSelect = this.Username;
    });
  }

  getCorteClient(id:any, name:any, date: any): void {
    let _date: any;
    if (date == 'Actual') _date = null;
    else _date = date;
    this.svc.getCorte(id, _date).subscribe((data:any) => {
      let _rowData:detailsCorte[] = [];
      for (let i = 0; i < data.length; i++) {
        const e = data[i];
        _rowData.push({
          Index: i+1,
          Curp: e.dataset,
          Documento: e.document,
          Estado: e.state,
          Fecha: String(e.createdAt).substring(0, String(e.createdAt).length - 1),
          Nombres: e.nameinside,
          Precio: e.price,
          Marked: false
        });
      }
      this.rowData = _rowData;
      this.NameSelect = name;
    });
  }

  selectClient(e: any): void {
    this.getCorteClient(e.client.id, e.client.nombre, e.corte);
  }

  selectDate(e: any): void {
    this.DateSelect = e;
    this.getClientsOnDate(e);
  }

  corteGeneral(): void {
    this.CClientes = !this.CClientes;
    if (this.CClientes) {
      this.rowData = [];
      this.NameSelect = '';
      this.getClientDates();
      this.CPropio = false;
      this.showTable = true;
    }
    else {
      this.showTable = false;
      this.DateSelect = '';
    }
  }

  cortePersonal(): void {
    this.CPropio = !this.CPropio;
    if(this.CPropio){
      this.rowData = [];
      this.NameSelect = '';
      this.getMyDates();
      this.CClientes = false;
      this.showTable = true;
    }    
    else {
      this.showTable = false;
      this.DateSelect = '';
    }
  }

  onClick(e: any): void {
    if (e.Id == 0) {
      this.corteGeneral();
    }
    else if (e.Id == 1) {
      this.cortePersonal();
    }
  }


  onSave(): void {
    const ws = utils.json_to_sheet(this.Cibers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "ListaDeCibers.xlsx");
  }



}
