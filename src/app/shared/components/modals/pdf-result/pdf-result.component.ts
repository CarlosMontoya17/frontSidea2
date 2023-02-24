import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/features/services/users.service';

@Component({
  selector: 'app-pdf-result',
  templateUrl: './pdf-result.component.html',
  styleUrls: ['./pdf-result.component.scss'],
})
export class PdfResultComponent implements OnInit {
  Filename: string = '';
  Data: any;
  Client: string = '';
  ClientId: number = 0;
  AsesorData: any;

  AllClients: any = [];

  constructor(private dialog: MatDialogRef<PdfResultComponent>, private users: UsersService) {
    dialog.disableClose = true;
  }

  ngOnInit(): void {}

  selectClient(client: any): void {
    this.Client = client.nombre;
    this.ClientId = client.id;
    this.users.getOne(client.id).subscribe((data:any) => {
      this.AsesorData = data;
    });
  }

  next(): void {
    let _data = {
      namefile: this.Filename,
      dataset: this.Data.curp,
      document: this.Data.tipo,
      level0: this.ClientId,
      nameinside: this.Data.nombre+" "+this.Data?.apellidos!,
      state: this.Data.estado
    };

      
    this.dialog.close(_data);
  }


}
