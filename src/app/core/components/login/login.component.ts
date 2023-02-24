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
    this.auth.LogIn('Ne_ci_8745lly', '$CibersNelly2023$Tux12023$').subscribe((data: any) => {
      if (data) {
        let _auth: Auth = data;
        localStorage.setItem(storageKeys.Token, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik5lX2NpXzg3NDVsbHkiLCJyb2wiOiJBc2Vzb3IiLCJpZCI6NywiaWF0IjoxNjc3MjcwMzQ1LCJleHAiOjE2NzczNTY3NDV9.wXymKaMfaPbfYz428WnNX3S3Q-J5e1duZ7PFv6deAbg');
        localStorage.setItem(storageKeys.Id, String(_auth.id));
        localStorage.setItem(storageKeys.Username, _auth.username);

        this.router.navigate(['app']);
      }
    }, () => {
      SimpleAlert("error", "ERROR", "Credenciales invalidas");
    });
  }
}
