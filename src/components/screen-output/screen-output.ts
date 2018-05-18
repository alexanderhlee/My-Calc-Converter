import { Component } from '@angular/core';
import { ConverterProvider } from '../../providers/converter/converter';

@Component({
    selector: 'screen-output',
    templateUrl: '../screen-output/screen-output.html'
})

export class ScreenOutputComponent {
    constructor(private converterProvider: ConverterProvider) {
    }

    screenOutputDec;
    screenOutputHex;
    screenOutputDoz

    refreshDisplay() {
        let output = this.converterProvider.getScreenOutput();
        this.screenOutputDec = output.dec;
        this.screenOutputHex = output.hex;
        this.screenOutputDoz = output.doz;
    }

    resetDisplayToZero() {
        this.converterProvider.resetToZero();
        this.refreshDisplay();
    }
}
