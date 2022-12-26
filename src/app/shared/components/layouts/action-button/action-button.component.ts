import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnChanges {

  @Input() Legend: string = '';
  @Input() Icon!: IconDefinition;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Input() disabled: boolean = true;
  constructor() { }

  ngOnChanges(): void {    
  }

  pressClick(): void{
    if(this.disabled) this.onClick.emit();
  }


}
