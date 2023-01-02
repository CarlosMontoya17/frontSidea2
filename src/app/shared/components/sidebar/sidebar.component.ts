import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { UsersService } from 'src/app/features/services/users.service';

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

  @Input() Services: string = 'none';
  @Input() Rol: number = 0;
  @Output() View: EventEmitter<number> = new EventEmitter();
  constructor(private router: Router, private user: UsersService) {}

  ngOnInit(): void {}

  SelectView(View: number): void {
    this.View.emit(View);
  }
  
  LogOut(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
