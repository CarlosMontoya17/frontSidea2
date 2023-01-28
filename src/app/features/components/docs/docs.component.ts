import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faArrowCircleUp,
  faBook,
  faCalendarDays,
  faPeopleArrowsLeftRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ColDef } from 'ag-grid-community';
import { CloseAlerts, SimpleLoader, SimpleMixed } from 'src/app/shared/alerts';
import { DragDropComponent } from 'src/app/shared/components/modals/drag-drop/drag-drop.component';
import { PdfResultComponent } from 'src/app/shared/components/modals/pdf-result/pdf-result.component';
import { cardInfo } from 'src/app/shared/models/card-information.model';
import { DocsService } from '../../services/docs.service';
import { UsersService } from '../../services/users.service';
import 'ag-grid-enterprise';
import { UtilsService } from '../../services/utils.service';
import { GridApi } from 'ag-grid-enterprise';
import { TransposeComponent } from 'src/app/shared/components/modals/transpose/transpose.component';
import { YnSimpleComponent } from 'src/app/shared/components/modals/yn-simple/yn-simple.component';
import { ManualComponent } from 'src/app/shared/components/modals/manual/manual.component';
import { ManualModel } from 'src/app/shared/models/manual.model';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  faTrashCan = faTrashCan;
  faCalendarDays = faCalendarDays;
  faPeopleArrowsLeftRight = faPeopleArrowsLeftRight;

  CardInfo: cardInfo[] = [
    {
      Id: 1,
      IconBtn: faBook,
      Input: false,
      Legend:
        'PARA VER LOS DOCUMENTOS ASIGNADOS A TI O SUBIDOS POR TI, DA CLICK EN VER.',
      LegendBtn: 'VER',
      Title: 'HISTORIAL',
      Width: 35,
      HideBtn: false
    },
    {
      Id: 0,
      IconBtn: faArrowCircleUp,
      Input: false,
      Legend:
        'PARA SUBIR UN DOCUMENTO Y ASIGNARLO A UN USUARIO MANUALMENTE, DA CLICK EN AÑADIR.',
      LegendBtn: 'SUBIR',
      Title: 'AÑADIR',
      Width: 35,
      HideBtn: false
    },
  ];

  public columns: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      width: 80,
      editable: true,
    },
    {
      field: 'document',
      headerName: 'Documento',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'dataset',
      headerName: 'CURP',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'state',
      headerName: 'Estado',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'nameinside',
      headerName: 'Nombres',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'seller',
      headerName: 'Vendedor',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'bought',
      headerName: 'Comprador',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'uploadby',
      headerName: 'Subido por',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Fecha',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
    {
      field: 'corte',
      headerName: 'Corte',
      filter: 'agMultiColumnFilter',
      cellStyle: { fontSize: '12px' },
      editable: true,
    },
  ];
  public rowSelection: 'multiple' = 'multiple';
  public rowData: any;
  private gridApi!: GridApi;
  public defaultColDef: any = {
    width: 200,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    resizable: true,
    editable: false,
    cellRendererParams: {
      checkbox: true,
    },
  };

  Dates: any;
  DateSelect: any;
  DisplaySelect: string = '';
  RowSelection: any;
  View: boolean = false;

  constructor(
    private dialog: MatDialog,
    private svc: DocsService,
    private users: UsersService,
    private utils: UtilsService
  ) {}

  ngOnInit(): void {}

  onClick(item: cardInfo): void {
    if (item.Id == 0) {
      this.newReg();
    } else if (item.Id == 1) {
      this.View = !this.View;
      if (this.View) {
        this.getDates();
      } else {
        this.Clear();
      }
    }
  }

  Clear(): void {
    this.Dates = [];
    this.DateSelect = undefined;
    this.DisplaySelect = '';
    delete this.RowSelection;
  }

  getDates(): void {
    this.svc.getDates().subscribe((data: any) => {
      let _actual = data.find((d: any) => d.corte == null);
      if (_actual) {
        _actual.corte = 'Actual';
      }
      this.Dates = data;
      this.DateSelect = data[0].corte;
      this.getHistory(data[0].corte == 'Actual' ? null : data[0].corte);
    });
  }

  getHistory(date: any): void {
    this.svc.getRegs(date).subscribe(
      (data: any) => {
        this.rowData = data;
      },
      (err: any) => {
        this.utils.ErrorManage(err);
      }
    );
  }

  selectDate(date: any): void {
    this.DateSelect = date;
    this.getHistory(date == 'Actual' ? null : date);
  }

  newReg(): void {



    const _dp = this.dialog.open(DragDropComponent, {
      width: 'md',
    });
    _dp.afterClosed().subscribe(async (f: any) => {
      if (f != 'manual' && f != undefined) {
        SimpleLoader();
        const _users = await this.users.getFull().toPromise();
        this.svc.sendPDF(f.fileRaw!, f.fileName!).subscribe(
          (data: any) => {
            CloseAlerts();
            if (data) {
              const _pdfR = this.dialog.open(PdfResultComponent);

              _pdfR.componentInstance.AllClients = _users;
              _pdfR.componentInstance.Data = data;
              _pdfR.componentInstance.Filename = f.fileName;
              _pdfR.afterClosed().subscribe((r: any) => {
                if (r) {
                  this.svc.newReg(r).subscribe((up: any) => {
                    SimpleMixed('success', 'REGISTRO AÑADIDO');
                  });
                }
              });
            }
          },
          (err: any) => {
            CloseAlerts();
            this.utils.ErrorManage(err);
          }
        );
      }
      else if (f == 'manual') {
        const _manual = this.dialog.open(ManualComponent);
        
        _manual.afterClosed().subscribe((data: any) => {
            if(data){
              let _manual: ManualModel = data;

              this.svc.newReg(_manual).subscribe(() => {
                SimpleMixed('success', 'REGISTRO AÑADIDO');
              },
              (err: any) => {
                CloseAlerts();
                this.utils.ErrorManage(err);
              });
            }
        });
      }
    });
  }

  onReadyGrid(p: any): void {
    this.gridApi = p?.api;
  }

  onSelectionRows(e: any): void {
    let _select = this.gridApi?.getSelectedRows();
    this.RowSelection = _select;
    let _legend = '';
    let _count = _select.length;
    let _iShow = 10;
    if (_count > 0) {
      for (let i = 0; i < _count; i++) {
        if (_count > 8) {
          if (i < _iShow) {
            _legend += _select[i]?.id;
            if (_count > 1 && i < _count - 1 && i != _iShow - 1) {
              _legend += ', ';
            }
          } else if (i == _iShow) {
            _legend += ` y ${_count - i} más`;
          }
        } else {
          _legend += _select[i]?.id;
          if (_count > 1 && i < _count - 1) {
            _legend += ', ';
          }
        }
      }
      this.DisplaySelect = _legend;
    }
  }

  async reAssign(): Promise<void> {
    const _dialog = this.dialog.open(TransposeComponent, { width: 'md' });
    const _users = await this.users.getFull().toPromise();
    _dialog.componentInstance.Users = _users;

    _dialog.afterClosed().subscribe(async (user: any) => {
      if (user) {
        for (let i = 0; i < this.RowSelection.length; i++) {
          const _e = this.RowSelection[i];
          await this.svc.reAssign(_e.id, user?.id).toPromise();
        }
        this.DisplaySelect = '';
        delete this.RowSelection;
        this.selectDate(this.DateSelect);
      }
    });
  }

  deleteRow(): void {
    if (this.RowSelection && this.RowSelection.length > 0) {
      const _dialog = this.dialog.open(YnSimpleComponent, { width: 'md' });

      _dialog.componentInstance.Content = `Deseas eliminar ${this.RowSelection.length} registro(s)`;

      _dialog.afterClosed().subscribe(async (data: any) => {
        if (data) {
          let _count = this.RowSelection.length;
          for (let i = 0; i < _count; i++) {
            const e = this.RowSelection[i];
            const id = e?.id;
            await this.svc.deleteReg(id).toPromise();
          }
          this.DisplaySelect = '';
          delete this.RowSelection;
          this.selectDate(this.DateSelect);
        }
      });
    }
  }
}
