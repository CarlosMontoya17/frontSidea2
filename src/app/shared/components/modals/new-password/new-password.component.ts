import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ManagmentService } from 'src/app/features/services/managment.service';
import { UtilsService } from 'src/app/features/services/utils.service';
import { CountdownService } from 'src/app/shared/services/countdown.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  Id: any;

  TimeToView: number = 0;
  pass: string = '';


  constructor(
               private Countdown: CountdownService,
               private utils: UtilsService,
               private svc: ManagmentService,
               private modal: MatDialogRef<NewPasswordComponent>
    ) { }

  ngOnInit(): void {
  console.log(this.Id);
  
  }

  AutoPassGen(): void {
    let _password = this.utils.WordGen(10);
    this.pass = _password;
    if(this.TimeToView != 0) this.Countdown.countdown.unsubscribe();
    this.Countdown.startTimer(10);
    this.Countdown.getTimer().subscribe((data:any) => {
        this.TimeToView = data;
    });
  }
  //Cambio de contraseña
  changePassword(): void {
    this.svc.changePassword(this.pass, this.Id).subscribe((data:any) => {
      this.modal.close();
    });
  }

}
