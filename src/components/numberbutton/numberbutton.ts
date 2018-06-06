import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterProvider } from '../../providers/converter/converter';

@Component({
  selector: 'number-button',
  templateUrl: '../numberbutton/numberbutton.html',
  styles: [`
    table {
      width: -webkit-fill-available;
      border-spacing: 1px; 
      border-collapse: inherit;
    }
  `]
})

export class NumberButtonComponent {
  @Input() displayNum;
  @Output() selected = new EventEmitter();

  constructor(private converterProvider: ConverterProvider) {
  }

  click() {
    this.converterProvider.onNumberSelected(this.displayNum);
    this.selected.emit();
  }
}