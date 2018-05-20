import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterProvider } from '../../providers/converter/converter';
import { SmartAudioProvider } from '../../providers/smart-audio/smart-audio';

@Component({
  selector: 'number-button',
  templateUrl: '../numberbutton/numberbutton.html'
})

export class NumberButtonComponent {
  @Input() displayNum;
  @Output() selected = new EventEmitter();

  constructor(private converterProvider: ConverterProvider, private smartAudio: SmartAudioProvider) {
  }

  click() {
    this.smartAudio.play('buttonClick');
    this.converterProvider.onNumberSelected(this.displayNum);
    this.selected.emit(); 
  }
}