import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  passwordForm!: FormGroup;
  pass: any;

  constructor( private formBuilder: FormBuilder,
               private modal: MatDialogRef<NewPasswordComponent>
    ) { }

  ngOnInit(): void {
  this.initEditarDatos();

  
  }

  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const char = 10; 
    for (let i = 0; i < char; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    this.passwordForm.get('newPass')?.setValue(this.pass);
    this.passwordForm.get('confPass')?.setValue(this.pass);
    
    this.pass = result;
    return result;

}

newPasswor(newp: any):void{
   this.modal.close(newp);
}


initEditarDatos(): void {
  this.passwordForm = this.formBuilder.group({
    newPass: ['', Validators.required],
    confPass: ['', Validators.required]
  });

}







}
