import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hexadecimal',
  templateUrl: 'hexadecimal.html'
})
export class HexadecimalPage {
  baseType = "Hexadecimal";

  constructor(public navCtrl: NavController) {
    this.loadButtons();
  }

  @ViewChild('screenoutput') screenOutput;

  highestRow: string[];
  topRow: number[];
  middleRow: number[];
  bottomRow: number[];

  loadButtons() {
    this.highestRow = ["A", "B", "C", "D", "E", "F"];
    this.topRow = [7, 8, 9];
    this.middleRow = [4, 5, 6];
    this.bottomRow = [1, 2, 3];
  }

  ionViewDidEnter(){
    if (this.screenOutput)
    {
      this.screenOutput.refreshDisplay();
    }
  }
}
