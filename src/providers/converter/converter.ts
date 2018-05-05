import { Injectable } from '@angular/core';

@Injectable()
export class ConverterProvider {

  constructor() {
  }

  private screenOutput = {
    dec: "0",
    hex: "0",
    doz: "0"
  };

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

  resetToZero() {
    this.screenOutput.dec = "0";
    this.screenOutput.hex = "0";
    this.screenOutput.doz = "0";
  }

  getScreenOutput() {
  return this.screenOutput;
 }
}
