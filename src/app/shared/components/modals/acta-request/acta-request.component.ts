import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faTriangleExclamation, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from 'src/app/features/services/utils.service';
import { modalRequest } from 'src/app/shared/models/req-modal.model';

@Component({
  selector: 'app-acta-request',
  templateUrl: './acta-request.component.html',
  styleUrls: ['./acta-request.component.scss']
})
export class ActaRequestComponent implements OnInit, OnChanges {

  faTriangleExclamation = faTriangleExclamation;
  faPaperPlane = faPaperPlane;

  Search: any;
  Type: any;
  Data: string = '';
  Valid:boolean = false;
  State: string = '';
  VariableSearch: boolean = false;
  Searches:any;

  Req: modalRequest = {
    Title: '',
    TitleSearch: '',
    Searches: [''],
    TitleType: '',
    Types: [''],
    Primary: 'Search',
    DependencySearch: null
  };
  

  constructor(private ref: MatDialogRef<ActaRequestComponent>, private utils: UtilsService) { }

  ngOnInit(): void {
    this.InitForm();
  }

  ngOnChanges(): void {
    this.InitForm();

  }


  InitForm(): void {
    this.Search = this.Req.Searches[0]!;
    this.Searches = this.Req.Searches;
    this.Type = this.Req.Types[0]!;
    this.Data = '';
    this.Valid = false;    
  }

  SelectSearch(e: any): void {
    this.Search = e.target.value;
    this.Data = '';
    this.Valid = false;
  }

  SelectType(e: any): void {
    this.Type = e.target.value;
    this.Data = '';
    this.Valid = false;
    if(this.Req.DependencySearch){
      if(this.Type == this.Req.DependencySearch.Type){
        this.Search = this.Req.DependencySearch.Searches[0];
        this.Searches = this.Req.DependencySearch.Searches;
      }
      else {
        this.Searches = this.Req.Searches;
      }
    }
    else {
      this.Searches = this.Req.Searches;
    };
  }

  onKey(e: any): void {
    this.Valid = e;
    if(e) {
      if(this.Search == 'CURP') this.State = this.utils.SetState(this.Data);
    }
  }


  SendInformation(): void {
    if(this.Data!='') {
      this.ref.close({ Search: this.Search, Type: this.Type, Data: this.Data, State: this.State });
    }
  }

}
