import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConverterProvider } from '../../providers/converter/converter';

@Component({
    selector: 'screen-output',
    templateUrl: '../screen-output/screen-output.html'
  })

export class ScreenOutputComponent {
    constructor(private converterProvider: ConverterProvider){
    }

    private screenOutputDec;
    private screenOutputHex;
    private screenOutputDoz

    function1(){
        alert("hi");
        let output = this.converterProvider.getScreenOutput();
        this.screenOutputDec = output.dec;
        this.screenOutputHex = output.hex;
        this.screenOutputDoz = output.doz;
    }
}
