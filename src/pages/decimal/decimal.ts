import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-decimal',
  templateUrl: 'decimal.html'
})

export class DecimalPage {
  baseType = "Decimal";

  generateNumberObject(number: Number) {
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
}
