import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterProvider } from '../../providers/converter/converter';

@Component({
  selector: 'number-button',
  templateUrl: '../numberbutton/numberbutton.html'
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