import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth.model';
import { storageKeys } from '../../models/storageKeys.model';
import { AuthService } from '../../services/auth.service';
import { SimpleAlert } from '../../../shared/alerts/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  USERNAME: string = '';
  PASSWORD: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem(storageKeys.Token)) {
      this.router.navigate(['app']);
    }
  }

  LogIn(): void {
    this.auth.LogIn(this.USERNAME, this.PASSWORD).subscribe((data: any) => {
      if (data) {
        let _auth: Auth = data;
        localStorage.setItem(storageKeys.Token, _auth.token);
        localStorage.setItem(storageKeys.Id, String(_auth.id));
        localStorage.setItem(storageKeys.Username, _auth.username);

        this.router.navigate(['app']);
      }
    }, (err:any) => {
      SimpleAlert("error", "ERROR", "Credenciales invalidas");
    });
  }
}
