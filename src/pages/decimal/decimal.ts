import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-decimal',
  templateUrl: 'decimal.html'
})

export class DecimalPage {
  baseType = "Decimal";

   constructor(public navCtrl: NavController) {
  }

  @ViewChild('screenoutput') screenOutput;

  private runningTotal = 0;
  private bottomRow = [1,2,3];
  private middleRow = [4,5,6];
  private topRow = [7,8,9];

  ionViewDidEnter(){
    if (this.screenOutput)
    {
      this.screenOutput.refreshDisplay();
    }
  }
}
