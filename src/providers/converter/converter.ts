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
    let myNum = theNum.num;
    let baseType = theNum.base;
    let tempInput: any = "0";
    let isZero = this.screenOutput.dec === "0";

    if (isZero) {
      tempInput = String(myNum);
    }

    if (baseType === 'dec') {
      if (!isZero) {
        tempInput = this.screenOutput.dec.concat(String(myNum));
      }
      this.screenOutput.dec = tempInput;
      this.screenOutput.hex = Number(tempInput).toString(16).toUpperCase();
      this.screenOutput.doz = this.regexToDozenal(Number(tempInput).toString(12)).toUpperCase();
    }
    else if (baseType === 'hex') {
      if (!isZero) {
        tempInput = this.screenOutput.hex.concat(String(myNum));
      }
      this.screenOutput.hex = tempInput;
      let decVal: Number;
      decVal = parseInt(tempInput, 16);
      this.screenOutput.dec = decVal.toString();
      this.screenOutput.doz = this.regexToDozenal(decVal.toString(12)).toUpperCase();
    }
    else if (baseType === 'doz') {
      if (!isZero) {
        tempInput = this.screenOutput.doz.concat(String(myNum));
      }
      this.screenOutput.doz = tempInput;
      let decVal: Number;
      decVal = parseInt(this.regexToDecimal(tempInput), 12);
      this.screenOutput.dec = decVal.toString();
      this.screenOutput.hex = decVal.toString(16).toUpperCase();
    }
  }

  // Use regex to replace all instances of "a" with "x" and "b" with "e".
  // Dozenal convention is that 10 is "x" and 11 is "e".
  regexToDozenal(input: String) {
    return input.replace(/a/g, "x").replace(/b/g, "e");
  }

  // Use regex to replace convert our conventional symbols of "X" and "E"
  // back to "a" and "b" so js can understand it.
  regexToDecimal(input: String) {
    return input.replace(/X/g, "a").replace(/E/g, "b");
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
