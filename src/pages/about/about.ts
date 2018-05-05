import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
    this.loadButtons();
  }

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
 



  


}
