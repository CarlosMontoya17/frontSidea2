import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { tableModal } from 'src/app/shared/models/table.model';

@Component({
  selector: 'app-table-modal',
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.scss']
})

export class TableModalComponent implements OnInit {

  Table: tableModal = {
    Columns: [ 
      { Display: 'Tipo', Key: 'tipo' }, 
      { Display: 'Busqueda', Key: 'busqueda' },
      { Display: 'CURP', Key: 'curp' },
      { Display: 'Nombres', Key: 'nombres' },
      { Display: 'Apellidos', Key: 'apellidos' },
      { Display: 'Estado', Key: 'estado' },
      { Display: 'Fecha', Key: 'fechaNac' },
      { Display: 'Acciones', Key: true }
    ],
    Data: []
  };

  
  constructor(private ref: MatDialogRef<TableModalComponent>) { }

  ngOnInit(): void {
  }

  SendInformation(e: any): void {
    
      this.ref.close(e);
      }

}


