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
    let temp: any = "0";
    if (this.screenOutput.dec == "0") {
      temp = String(theNum);
    }
    else {
      temp = this.screenOutput.dec.concat(String(theNum));
    }
    if (!isNaN(temp)){
      this.screenOutput.dec = temp;
      this.screenOutput.hex = Number(temp).toString(16).toUpperCase();
      this.screenOutput.doz = this.formatDozenal(Number(temp).toString(12)).toUpperCase();
    }
    else{
      this.screenOutput.dec = temp.toString(10);
      this.screenOutput.hex = temp.toString(16).toUpperCase();
      this.screenOutput.doz = this.formatDozenal(temp.toString(12)).toUpperCase();
    }
   
  }

  // Use regex to replace all instances of "a" with "x" and "b" with "e".
  // Dozenal convention is that 10 is "x" and 11 is "e".
  formatDozenal(input: String) {
    return input.replace(/a/g, "x").replace(/b/g, "e");
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
