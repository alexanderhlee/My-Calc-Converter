import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  numberOutput = {
    text: "0"
  };

  currentOp = -1;
  runningTotal = 0;

  appenNum(num: string){
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
    
  }

  clearText(){
    this.numberOutput.text = "0";
    this.runningTotal = 0;
  }

  setCurrentOpToAdd(){
    this.currentOp = 1;
  }

  setCurrentOpToSub(){
    this.currentOp = 0;
  }

  displayTotal(){
    this.numberOutput.text = String(this.runningTotal);
  }

}
