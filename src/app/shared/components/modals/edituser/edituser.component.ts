import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagmentService } from '../../../../../app/features/services/managment.service';
import { AgreusuarioComponent} from '../agreusuario/agreusuario.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class EdituserComponent implements OnInit {

  usernameLocal: string = '';

  constructor(private svc: ManagmentService, 
    private activerouter: ActivatedRoute, 
    private router: Router,
    ) { }

    

  ngOnInit(): void {

   

  }
  cargar():void {
    
  }

}
