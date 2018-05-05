import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   constructor(public navCtrl: NavController) {
  }

  private runningTotal = 0;
  private bottomRow = [1,2,3];
  private middleRow = [4,5,6];
  private topRow = [7,8,9];

  /* appenNum(num: string){
    if (this.numberOutput.text=="0")
    {
      this.numberOutput.text = num;
      this.runningTotal = Number(num);
    }
    else
    {
      if (this.currentOp == -1) {
        let temp = this.numberOutput.text.concat(num);
        this.numberOutput.text = temp;
        this.runningTotal = Number(temp);
      }
      else{
        if (this.currentOp == 1){
          this.runningTotal += Number(this.numberOutput.text);
        }
        else if (this.currentOp == 0){
          this.runningTotal -= Number(this.numberOutput.text);
        }
      }

    } 
    
  }*/
}
