import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InputColors } from 'src/app/shared/models/input-colors.model';

@Component({
  selector: 'app-input-colors',
  templateUrl: './input-colors.component.html',
  styleUrls: ['./input-colors.component.scss']
})
export class InputColorsComponent implements OnInit {

  PICK_COLOR: InputColors[] = [];

  constructor(private modal: MatDialogRef<InputColorsComponent> ) { }

  ngOnInit(): void {
  }

  onOk(): void {

  }
  onCancel(): void {

  }

  onChange(e: any): void {
    // console.log(e.target.value);
    
  }
}
