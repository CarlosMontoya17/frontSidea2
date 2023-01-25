import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ManagmentComponent } from 'src/app/features/components/managment/managment.component';
import { ManagmentService } from 'src/app/features/services/managment.service';

@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {


  Providers: any = [];
  Search: string = '';
  Rol: string = '';
  constructor( 
    private svc: ManagmentService,
    private modal: MatDialogRef<SelectProviderComponent>
    ) { }

  ngOnInit(): void {
  this.svc.getMySuper(this.Rol).subscribe((d: any) =>{
    this.Providers = d;
  })
  }

  SelectProvider(provider: any): void {
    this.modal.close(provider);

  }

}
