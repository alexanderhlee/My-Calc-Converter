import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'number-button',
    templateUrl: '../numberbutton/numberbutton.html'
  })
  export class NumberButtonComponent {
    @Input() numNumber;
    @Output() selected = new EventEmitter();

    clickMe(){
      this.selected.emit(this.numNumber);
    }
  }