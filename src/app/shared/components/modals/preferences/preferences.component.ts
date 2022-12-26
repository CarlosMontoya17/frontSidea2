import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
 
  faXmark = faXmark;
  
  constructor(private ref: MatDialogRef<PreferencesComponent>) { }

  ngOnInit(): void {
  }

  SelectPreferences(e: any): void {
    this.ref.close(e);
  }

}
