import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NumberButtonComponent} from '../../components/numberbutton/numberbutton'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private runningTotal = 0;
  private screenOutput = "";
  private screenOutputHex = "";
  private screenOutputDoz = "";

  private numberArray1 = [1,2,3];
  private numberArray2 = [4,5,6];
  private numberArray3 = [7,8,9];

  onViewDidLoad(){
    this.clearText();
  }


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

  onNumberSelected(theNum) {
    let temp = "0";
    if (this.screenOutput == "0") {
      temp = String(theNum);
    }
    else {
      temp = this.screenOutput.concat(String(theNum));
    }
    this.screenOutput = temp;
    this.screenOutputHex = Number(temp).toString(16).toUpperCase();
    this.screenOutputDoz = this.formatDozenal(Number(temp).toString(12)).toUpperCase();
    //console.log(theNum);
  }

   clearText(){
    this.runningTotal = 0;
    this.screenOutput = String(this.runningTotal);
    this.screenOutputHex = String(this.runningTotal);
    this.screenOutputDoz = String(this.runningTotal);
  }

  formatDozenal(input: String){
    return input.replace("a", "x").replace("b","e");
  }

  /*
  setCurrentOpToAdd(){
    this.currentOp = 1;
  }

  setCurrentOpToSub(){
    this.currentOp = 0;
  }

  displayTotal(){
    this.numberOutput.text = String(this.runningTotal);
  } */

}
