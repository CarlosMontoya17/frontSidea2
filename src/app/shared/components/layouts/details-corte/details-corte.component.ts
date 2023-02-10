import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
import { of } from 'rxjs';
import { UtilsService } from 'src/app/features/services/utils.service';
import { contadorCorte, ContadorTable } from 'src/app/shared/models/corte-contador.model';
import { detailsCorte } from 'src/app/shared/models/details-corte.model';
import { InputColors } from 'src/app/shared/models/input-colors.model';
import Swal from 'sweetalert2';
import { utils, writeFileXLSX } from 'xlsx';



@Component({
  selector: 'app-details-corte',
  templateUrl: './details-corte.component.html',
  styleUrls: ['./details-corte.component.scss']
})
export class DetailsCorteComponent implements OnInit, OnChanges {
  page: number = 1;
  itemPerPage: number = 10;
  items: any;
  indexOfItems: any;
  paginacion: boolean = false;
  @ViewChild('nameClient') nameClient!: ElementRef;
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  //collection = {count:30,data:[]};

  Contador: ContadorTable[] = [
    {
      Label: 'A. Nacimiento',
      Value: 0,
      Marked: false
    },
    {
      Label: 'A. Defunción',
      Value: 0,
      Marked: false
    },
    {
      Label: 'A. Matrimonio',
      Value: 0,
      Marked: false
    },
    {
      Label: 'A. Divorcio',
      Value: 0,
      Marked: false
    },
    {
      Label: 'Semanas Cotizadas',
      Value: 0,
      Marked: false
    },
    {
      Label: 'NSS',
      Value: 0,
      Marked: false
    },
    {
      Label: 'RFC',
      Value: 0,
      Marked: false
    },
    {
      Label: 'CFE',
      Value: 0,
      Marked: false
    },
    {
      Label: 'Constacia De Derechos',
      Value: 0,
      Marked: false
    },
    {
      Label: 'Constacia De Inhabilitación',
      Value: 0,
      Marked: false
    },
    {
      Label: 'Total',
      Value: 0,
      Marked: false
    }

  ];
  PrecioFinal: number = 0;

  Painting: boolean = false;
  ChangeColor: boolean = false;

  @Input() nombreNegocio: string = '';
  @Input() rowData: detailsCorte[] = [];

  /** Color  */

  panelOpenState = false;
  bgColor: string = '#f8f8f8';
  fgColor: string = '#000000';
  Inputs: InputColors[] = [
    {
      Id: 0,
      Type: "Fondo",
      Value: this.bgColor
    },
    {
      Id: 1,
      Type: "Titulos",
      Value: this.fgColor
    },
  ];

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.scanDocs(this.rowData);
    this.sumaTotal(this.rowData);
    this.getfecha();

    
  }

  getfecha(){
    let _data = this.rowData;
    let _rowData = _data.map(d => {
      return {
        Indice: d.Index,
        Documento: d.Documento,
        Nombres: d.Nombres,
        Dato: d.Curp,
        Fecha: new Date(d.Fecha).toLocaleTimeString(),
        Estado: d.Estado,
        Precio: d.Precio,
        Cliente: d.Cliente
      }
    });

    console.log();
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scanDocs(this.rowData);
    this.sumaTotal(this.rowData);
  
  }

  async onTableDataChange(event: any) {
    this.page = event;

    console.log(this.page);
    
  }

  async paginacionCorte2(corteDelUsuario:any) {
    this.paginacion = true;
    let backup = corteDelUsuario;
    let itemsTotal: number = corteDelUsuario.length;
    let divide: number = Math.floor(itemsTotal / this.itemPerPage);
    let res: number = itemsTotal % this.itemPerPage;

    let pages: number = divide;

    if (res != 0) {
      pages += 1;
    }

    let currentPageData = corteDelUsuario;
    let index = 0;
    for (let a = 0; a < pages + 1; a++) {
      let pageData = [];
      let indexes = [];
      this.indexOfItems = [];
      for (let b = 0; b < this.itemPerPage; b++) {
        if (currentPageData[currentPageData.length - 1] != undefined) {
          pageData.push(currentPageData[currentPageData.length - 1]);
          currentPageData.pop();
          index += 1;
          indexes.push(index);
        }
      }

      this.indexOfItems.push(indexes);
      this.items = await pageData;

      this.nameClient.nativeElement.style.setProperty("position", "relative"); 
      this.nameClient.nativeElement.style.setProperty("top", "0"); 
      html2canvas(document.querySelector("#data-table")!).then((data:any) => {
        if (this.paginacion == true && a > 0){
  let a = document.createElement('a');
          a.href =  data.toDataURL('image/png');
          a.download = `${this.nombreNegocio}.png`;
          a.click();
          a.remove();
          this.nameClient.nativeElement.style.setProperty("position", "sticky"); 
          this.nameClient.nativeElement.style.setProperty("top", "79px"); 

        }
        
      }); 
      
      await html2canvas(this.screen.nativeElement).then((canvas) => {
        if (this.paginacion == true && a > 0) {
          this.canvas.nativeElement.src = canvas.toDataURL();
          this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
          let pagina = a;
          this.downloadLink.nativeElement.download =
            'Corte -' +
            this.nombreNegocio +
            '-Pag:' +
            pagina +
            '-' +
            pages +
            ' .png';
          this.downloadLink.nativeElement.click();
        }
      });
    }
    corteDelUsuario = backup;
    this.indexOfItems = [];
    console.log(corteDelUsuario);
    
  }

  async paginacionCorte() {
    this.paginacion = true;
    let _data = this.rowData;
    let _rowData = _data.map(d => {
      return {
        Indice: d.Index,
        Documento: d.Documento,
        Nombres: d.Nombres,
        Dato: d.Curp,
        Fecha: new Date(d.Fecha).toLocaleString(),
        Estado: d.Estado,
        Precio: d.Precio,
        Cliente: d.Cliente
      }
    });

 
    let backup = _rowData;
    let itemsTotal: number = _rowData.length;
    let divide: number = Math.floor(itemsTotal / this.itemPerPage);
    let res: number = itemsTotal % this.itemPerPage;

    let pages: number = divide;

    if (res != 0) {
      pages += 1;
    }

    let currentPageData = _rowData;
    let index = 0;
    for (let a = 0; a < pages + 1; a++) {
      let pageData = [];
      let indexes = [];
      this.indexOfItems = [];
      for (let b = 0; b < this.itemPerPage; b++) {
        if (currentPageData[currentPageData.length - 1] != undefined) {
          pageData.push(currentPageData[currentPageData.length - 1]);
          currentPageData.pop();
          index += 1;
          indexes.push(index);
        }


        this.indexOfItems.push(indexes);
        this.items = await pageData;
        this.nameClient.nativeElement.style.setProperty("position", "relative"); 
    this.nameClient.nativeElement.style.setProperty("top", "0"); 
    html2canvas(document.querySelector("#data-table")!).then((data:any) => {
      if (  this.paginacion = true&& a > 0){

  let a = document.createElement('a');
        a.href =  data.toDataURL('image/png');
        a.download = `${this.nombreNegocio}.png`;
        a.click();
        a.remove();
        this.nameClient.nativeElement.style.setProperty("position", "sticky"); 
        this.nameClient.nativeElement.style.setProperty("top", "79px"); 
      }
      
    }); 
      }

   
    }
    _rowData = backup;
    this.indexOfItems = [];
  }

  onSelectColor(): void {
    this.ChangeColor = !this.ChangeColor;
  }

  onResetColor(): void {
    this.Inputs[0].Value = this.bgColor;
    this.Inputs[1].Value = this.fgColor;
  }
  
  onChangeColor(e: any, elemnt: InputColors): void {
    let _input = this.Inputs.find(d => d.Id == elemnt.Id);
    if(_input){
      _input.Value = e.target.value;
    }
  }

  onPaint(): void {
    this.Painting = !this.Painting;
  }
  OnClean():void{

    this.Inputs[0].Value = this.bgColor;
    this.Inputs[1].Value = this.fgColor;

  }

  SelectRow(item: detailsCorte): void {

    let _e = this.rowData.find(d => d == item);
    if (this.Painting) {
      if (_e) {
        _e.Marked = !_e.Marked;
      }
    }
  }

  SelectContador(item: ContadorTable): void {
    let _e = this.Contador.find(d => d == item);
    if (this.Painting) {
      if (_e) {
        _e.Marked = !_e.Marked;
      }
    }
  }

  exportExcel(): void {
    let _data = this.rowData;
    let _rowData = _data.map(d => {
      return {
        Indice: d.Index,
        Documento: d.Documento,
        Nombres: d.Nombres,
        Dato: d.Curp,
        Fecha: new Date(d.Fecha).toLocaleString(),
        Estado: d.Estado,
        Precio: d.Precio,
        Cliente: d.Cliente
      }
    });

    

    let _ws = utils.json_to_sheet(_rowData);
    const _wb = utils.book_new();
    utils.book_append_sheet(_wb, _ws, "Corte");
    writeFileXLSX(_wb, `${this.nombreNegocio}_Corte.xlsx`);
  }

  exportPng(): void {

    let _data = this.rowData;
    let _rowData = _data.map(d => {
      return {
        Indice: d.Index,
        Documento: d.Documento,
        Nombres: d.Nombres,
        Dato: d.Curp,
        Fecha: new Date(d.Fecha).toLocaleString(),
        Estado: d.Estado,
        Precio: d.Precio,
        Cliente: d.Cliente
      }
    });
if(_rowData.length <= 10 ){
  this.nameClient.nativeElement.style.setProperty("position", "relative"); 
  this.nameClient.nativeElement.style.setProperty("top", "0"); 
  html2canvas(document.querySelector("#data-table")!).then((data:any) => {
      let a = document.createElement('a');
      a.href =  data.toDataURL('image/png');
      a.download = `${this.nombreNegocio}.png`;
      a.click();
      a.remove();
      this.nameClient.nativeElement.style.setProperty("position", "sticky"); 
      this.nameClient.nativeElement.style.setProperty("top", "79px"); 
  }); 


}
else if (_rowData.length > 10) {
  console.log(_rowData.length);
  Swal.fire({
    title: 'Aviso',
    text: 'Tienes mas de 10 elementos, ¿Deseas descargarlo por partes?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No, en una sola imagen',
  }).then(async (result) => {
    if (result.isConfirmed) {
    
       
this.paginacionCorte2(_rowData);
    
    } else {
      this.paginacion = false;

      this.nameClient.nativeElement.style.setProperty("position", "relative"); 
      this.nameClient.nativeElement.style.setProperty("top", "0"); 
      html2canvas(document.querySelector("#data-table")!).then((data:any) => {
          let a = document.createElement('a');
          a.href =  data.toDataURL('image/png');
          a.download = `${this.nombreNegocio}.png`;
          a.click();
          a.remove();
          this.nameClient.nativeElement.style.setProperty("position", "sticky"); 
          this.nameClient.nativeElement.style.setProperty("top", "79px"); 
      }); 
 
   
    }
  });
}
   
  }


  scanDocs(data: any): void {
    let _nac = 0;
    let _def = 0;
    let _mat = 0;
    let _div = 0;
    let _cot = 0;
    let _nss = 0;
    let _rfc = 0;
    let _cfe = 0;
    let _der = 0;
    let _inh = 0;
    let _total = 0;

    for (let i = 0; i < data.length; i++) {
      _total = _total + 1;
      let s = data[i];
      if (s.Documento === "Acta de Nacimiento") {
        _nac = _nac + 1;
      } else if (s.Documento === "Acta de Defuncion") {
        _def = _def + 1;
      } else if (s.Documento === "Acta de Matrimonio") {
        _mat = _mat + 1;
      } else if (s.Documento === "Acta de Divorcio") {
        _div = _div + 1;
      } else if (s.Documento === "Semanas Cotizadas") {
        _cot = _cot + 1;
      } else if (s.Documento === "Asignación de Número de Seguridad Social") {
        _nss = _nss + 1;
      } else if (s.Documento === "Registro Federal de Contribuyentes") {
        _rfc = _rfc + 1;
      } else if (s.Documento === "CFE") {
        _cfe = _cfe + 1;
      } else if (s.Documento === "Constancia de Vigencia de Derechos") {
        _der = _der + 1;
      } else if (s.Documento === "Constacia de Inhabilitacion") {
        _inh = _inh + 1;
      }
    }

    this.Contador.forEach(e => e.Marked = false);
    this.Contador.find(d => d.Label == 'A. Nacimiento')!.Value = _nac;
    this.Contador.find(d => d.Label == 'A. Defunción')!.Value = _def;
    this.Contador.find(d => d.Label == 'A. Matrimonio')!.Value = _mat;
    this.Contador.find(d => d.Label == 'A. Divorcio')!.Value = _div;
    this.Contador.find(d => d.Label == 'Semanas Cotizadas')!.Value = _cot;
    this.Contador.find(d => d.Label == 'NSS')!.Value = _nss;
    this.Contador.find(d => d.Label == 'RFC')!.Value = _rfc;
    this.Contador.find(d => d.Label == 'CFE')!.Value = _cfe;
    this.Contador.find(d => d.Label == 'Constacia De Derechos')!.Value = _der;
    this.Contador.find(d => d.Label == 'Constacia De Inhabilitación')!.Value = _inh;
    this.Contador.find(d => d.Label == 'Total')!.Value = _total;
  }

  sumaTotal(data: any) {

    let check: number | undefined;
    let suma: number = 0;
    for (let i = 0; i < data.length; i++) {
      let check = data[i];
      if (check.Precio == !undefined) {
      }
      suma = suma + check.Precio
    }
    this.PrecioFinal = suma;
  }

  onSaveCorte(): void {

    const tbl1 = utils.json_to_sheet(this.rowData);
    let tbl2 = document.getElementsByTagName("table")[1]
    let worksheet_tmp2 = utils.table_to_sheet(tbl2);

    let a = utils.sheet_to_json(tbl1, { header: 1 })
    let b = utils.sheet_to_json(worksheet_tmp2, { header: 1 })
    a = a.concat(['']).concat(b)

    let ws = utils.json_to_sheet(a, { skipHeader: true })
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Detalles");
    writeFileXLSX(wb, "Corte.xlsx");
  }


}