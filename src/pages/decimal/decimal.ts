import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-decimal',
  templateUrl: 'decimal.html'
})

export class DecimalPage {
  baseType = "Decimal";
  numStack = [];

  generateNumberObject(number: any) {
    let retNumberItem = {
      num: number,
      base: "dec"
    }
    return retNumberItem;
  }

  bottomRow = [this.generateNumberObject(1), this.generateNumberObject(2), this.generateNumberObject(3)];
  middleRow = [this.generateNumberObject(4), this.generateNumberObject(5), this.generateNumberObject(6)];
  topRow = [this.generateNumberObject(7), this.generateNumberObject(8), this.generateNumberObject(9)];
  zeroButton = this.generateNumberObject(0);

  constructor(public navCtrl: NavController) {
  }

  @ViewChild('screenoutput') screenOutput;

  ionViewDidEnter() {
    if (this.screenOutput) {
      this.screenOutput.refreshDisplay();
    }
  }

  doPlus(){
    //console.log("plus was pushed!");
    this.numStack.push(this.screenOutput.screenOutputDec);
    this.screenOutput.resetDisplayToZero();
    //console.log(this.screenOutput.screenOutputDec);
  }

  doEq(){
    //console.log("equals was pushed!");
    this.numStack.push(this.screenOutput.screenOutputDec);
    if (this.numStack[0] && this.numStack[1]){
      console.log(Number(this.numStack[0]) + Number(this.numStack[1]));
      this.numStack = [];
    }
  }
}
