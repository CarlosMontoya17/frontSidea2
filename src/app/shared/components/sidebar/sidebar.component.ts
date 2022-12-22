import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faBars,
  faHomeUser,
  faGear,
  faFile,
  faSackDollar,
  faBook,
  faPersonWalkingArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { Roles } from 'src/app/core/models/roles.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faBars = faBars;
  faHomeUser = faHomeUser;
  faGear = faGear;
  faFile = faFile;
  faSackDollar = faSackDollar;
  faBook = faBook;
  faPersonWalkingArrowRight = faPersonWalkingArrowRight;

  @Input() Rol: Roles = 1;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  LogOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
