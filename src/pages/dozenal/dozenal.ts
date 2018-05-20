import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-donzenal',
  templateUrl: 'dozenal.html'
})
export class DozenalPage {
  baseType = "Dozenal";

  generateNumberObject(number: any) {
    let retNumberItem = {
      num: number,
      base: "doz"
    }
    return retNumberItem;
  }

  constructor(public navCtrl: NavController) {
    this.loadButtons();
  }

  @ViewChild('screenoutput') screenOutput;

  highestRow: any[];
  topRow: any[];
  middleRow: any[];
  bottomRow: any[];
  zeroButton: any;

  loadButtons() {
    //this.highestRow = ["X", "E"];
    //this.topRow = [7, 8, 9];
    //this.middleRow = [4, 5, 6];
    //this.bottomRow = [1, 2, 3];

    this.bottomRow = [this.generateNumberObject(1), this.generateNumberObject(2), this.generateNumberObject(3)];
    this.middleRow = [this.generateNumberObject(4), this.generateNumberObject(5), this.generateNumberObject(6)];
    this.topRow = [this.generateNumberObject(7), this.generateNumberObject(8), this.generateNumberObject(9)];
    this.highestRow = [this.generateNumberObject("X"), this.generateNumberObject("E")]
    this.zeroButton = this.generateNumberObject(0);
  }

  ionViewDidEnter() {
    if (this.screenOutput) {
      this.screenOutput.refreshDisplay();
    }
  }
}
