import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/features/services/users.service';
import { UtilsService } from 'src/app/features/services/utils.service';
import { ManualModel } from 'src/app/shared/models/manual.model';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  Users: any;

  Search: string = '';

  /** SELECTS */

  EstadoSelect: string = 'AGUASCALIENTES';
  DocumentSelect: string = 'Acta de Nacimiento';

  CURP: string = '';
  Nombres: string = '';
  Apellidos: string = '';

  /** precio, superviser */
  Price: any;
  Level0: any;
  Superviser: any;

  constructor(
    private user: UsersService,
    private utils: UtilsService,
    private modal: MatDialogRef<ManualComponent>
  ) { }

  ngOnInit(): void {
    this.user.getFull().subscribe((data:any) => {
      this.Users = data;
    });
  }

  onUserSelect(user: any): void {
    this.Level0 = user.id;
    this.user.getPrice(user.id, this.DocumentSelect, this.EstadoSelect).subscribe((data: any) => {
      if(data){
        this.Price = Number(data.precio);
        this.Superviser = data.superviser;
      }
    });
  }

  onSave(): void {
    let _object: ManualModel = {
      dataset: this.CURP,
      document: this.DocumentSelect,
      level0: this.Level0,
      namefile: '',
      nameinside: `${this.Nombres} ${this.Apellidos}`,
      state: this.EstadoSelect
    };


    this.modal.close(_object);
  }





}
