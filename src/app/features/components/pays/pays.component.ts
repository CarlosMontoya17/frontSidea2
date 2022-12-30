import { Component, OnInit } from '@angular/core';
//import { actionEmitter, cardFilter } from 'src/app/shared/models/card-filters.model';
import { cardRequest, searchCURP } from 'src/app/shared/models/card-request.model';
import { PaysService } from '../../services/pays.service';
import { cardCorte, actionEmitterCorte } from 'src/app/shared/models/card-corte.model';
import { actionEmitter, paysFilter } from 'src/app/shared/models/pays-filter.model';
//import { cardInfo } from 'src/app/shared/models/card-information.model';


@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss'],
  providers: [PaysService]
})
export class PaysComponent implements OnInit {

  Peticiones:cardRequest[] = [];
 // View:number = 0;
  PaysFilter: paysFilter[] = [
    {
      Id: 0,
      Title: '',
      Type: 'Dropdown',
      Width: 15,
      Tooltip: 'Seleccionar Fecha de Corte',
      Content: {
        Default: '',
        Options: [],
        Key: ''
      }
    },
    {
      Id: 1,
      Title: '',
      Type: 'Searcher',
      Width: 20,
      Tooltip: 'Buscar Nombre de Negocio',
      Content: null
    }

  ]
  Solicitudes: cardCorte[] = [
    {
        Index: 0,
        Id: "123",
        Name: "TEST"
    }
  ];

  FechaActual: any = '';

  constructor(private pay: PaysService) { }

  async ngOnInit(): Promise<void> {
    this.getDates();
    this.getDateActual();
    //console.log("HERE");
  }

  async getDates(): Promise<void> {
    let _dates: any = await this.pay.getDates().toPromise();
    if(_dates){
      let _n = _dates.find((d:any) => d.corte == null);
      if(_n){
        _n.corte = "Actual";
      } 
      let _f = this.PaysFilter.find((d:any) => d.Id == 0);
      if(_f){
        _f.Content!.Default = _dates[0].corte;
        _f.Content!.Options = _dates;
        _f.Content!.Key = "corte";

        //this.getPeticiones(_dates[1]);
      }
      //console.log(_dates);
      //console.log(_dates[1]);

      //this.getPeticiones(_dates[1]);
    }
  }

  async getDateActual(): Promise<void>{
    let fecha = this.pay.getDates().subscribe((data:any) => {
      for (let i = 0; i < data.length; i++) {
        let e:any = data[i];
        if (i==1) {
        //console.log(e.corte);
        this.FechaActual = e.corte 
        this.getPeticiones(e.corte);
        }
        //console.log(e.corte);
      }
      
    });
  }

  getPeticiones(date:string): void {
    let _date:string = date;
    if(_date == 'Actual') _date = 'null';
    this.pay.getPeticiones(_date).subscribe((data:any) => {
      this.TransformPeticiones(data);
    });
  }

  selectDate(item: actionEmitter): void {
    let _f = this.PaysFilter.find((d:any) => d.Id == item.Source);
    if(_f?.Content?.Default){
      _f.Content.Default = item.Value;
          //console.log(item.Value);
      this.getPeticiones(item.Value);
    }
  }

  TransformPeticiones(data: any): void {
    let cliente: cardCorte[] = [];
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
      let e:any = data[i];
      //console.log(data[i]);

      const _d: cardCorte={
      Index: i+1,
      Id: e.id,
      Name: e.nombre

    };

    cliente.push(_d);
    }

              const h: cardCorte={
                Index: 99,
                Id: '123',
                Name: 'Faker'
              };
              cliente.push(h)

    this.Solicitudes = cliente;     
}
//////// Search Docs from a Ciber
selectCiber(aux:any){
  console.log(aux);
}




/////Not yet
  searchDoc(word: actionEmitter): void{
    console.log(word);
  }


}
