import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hexadecimal',
  templateUrl: 'hexadecimal.html'
})
export class HexadecimalPage {
  baseType = "Hexadecimal";

  generateNumberObject(number: any) {
    let retNumberItem = {
      num: number,
      base: "hex"
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
    //this.highestRow = ["A", "B", "C", "D", "E", "F"];
    //this.topRow = [7, 8, 9];
    //this.middleRow = [4, 5, 6];
    //this.bottomRow = [1, 2, 3];

    this.bottomRow = [this.generateNumberObject(1), this.generateNumberObject(2), this.generateNumberObject(3)];
    this.middleRow = [this.generateNumberObject(4), this.generateNumberObject(5), this.generateNumberObject(6)];
    this.topRow = [this.generateNumberObject(7), this.generateNumberObject(8), this.generateNumberObject(9)];
    this.highestRow = [this.generateNumberObject("A"), this.generateNumberObject("B"),
                        this.generateNumberObject("C"), this.generateNumberObject("D"),
                        this.generateNumberObject("E"), this.generateNumberObject("F")];
    this.zeroButton = this.generateNumberObject(0);
  }

  ionViewDidEnter() {
    if (this.screenOutput) {
      this.screenOutput.refreshDisplay();
    }
  }
}
