import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-simple',
  templateUrl: './error-simple.component.html',
  styleUrls: ['./error-simple.component.scss']
})
export class ErrorSimpleComponent implements OnInit {

  
  faTriangleExclamation = faTriangleExclamation;
  @Input() Title: string = 'Error';
  @Input() Content: string = '';
  @Input() Actions: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
