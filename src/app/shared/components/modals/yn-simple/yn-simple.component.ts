import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-yn-simple',
  templateUrl: './yn-simple.component.html',
  styleUrls: ['./yn-simple.component.scss']
})
export class YnSimpleComponent implements OnInit {

  Title: string = 'CONFIRMAR';
  Content: string = '';
  OkText: string = 'Ok';
  CancelText: string = 'Cancelar';
  constructor(private dialog: MatDialogRef<YnSimpleComponent>) { 
    dialog.disableClose = true;
  }

  ngOnInit(): void {
  }

  onOk(): void {
    this.dialog.close(true);
  }

  onCancel(): void {
    this.dialog.close(false);
  }

}
