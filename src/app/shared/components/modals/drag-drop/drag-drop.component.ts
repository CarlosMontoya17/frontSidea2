import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faArrowRight, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  faXmark = faXmark;
  faArrowRight = faArrowRight;
  faUser = faUser;

  @Input() acceptFile = "application/pdf";

  FileTmp: any;
  constructor(private dialog: MatDialogRef<DragDropComponent>) {
    dialog.disableClose = true;
   }

  ngOnInit(): void {
  }

  get(e: any): void {
    const [_file] = e.target.files;
    this.FileTmp = {
      fileRaw: _file,
      fileName: _file?.name
    };
  }

  next(): void {
    this.dialog.close(this.FileTmp);
  }

  manual(): void {
    this.dialog.close("manual");
  }


  close(): void {
      this.dialog.close();
  }

}
