import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.scss']
})
export class TransposeComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;
  Search: any;
  Users: any = [];

  constructor(private ref: MatDialogRef<TransposeComponent>) { }

  ngOnInit(): void {
  }

  sendInfo(e: any): void {
    this.ref.close(e);
  }

}
