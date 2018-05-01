import { Injectable } from '@angular/core';
import  { Observable } from 'rxjs/Observable'

@Injectable()
export class ConverterProvider {

  constructor() {
    //console.log('Hello ConverterProvider Provider');
  }

  private screenOutput = {
    dec: "",
    hex: "",
    doz: ""
  };

  //$screenOutput: Observable<Array<string>>;

  onNumberSelected(theNum) {
    let temp = "0";
    if (this.screenOutput.dec == "0") {
      temp = String(theNum);
    }
    else {
      temp = this.screenOutput.dec.concat(String(theNum));
    }
    this.screenOutput.dec = temp;
    this.screenOutput.hex = Number(temp).toString(16).toUpperCase();
    this.screenOutput.doz = this.formatDozenal(Number(temp).toString(12)).toUpperCase();
  }

  formatDozenal(input: String) {
    return input.replace("a", "x").replace("b", "e");
  }

  clearText() {
    this.screenOutput.dec = "0";
    this.screenOutput.hex = "0";
    this.screenOutput.doz = "0";
  }

 public getScreenOutput(){
  return this.screenOutput;
 }
}
