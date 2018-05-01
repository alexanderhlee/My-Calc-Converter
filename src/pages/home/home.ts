import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOutputComponent } from '../../components/screen-output/screen-output'
import { ConverterProvider } from '../../providers/converter/converter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   constructor(private converterProvider: ConverterProvider, public navCtrl: NavController) {

  }

  private runningTotal = 0;
  private screenOutput = "";
  private screenOutputHex = "";
  private screenOutputDoz = "";

  private numberArray1 = [1,2,3];
  private numberArray2 = [4,5,6];
  private numberArray3 = [7,8,9];

  onViewDidEnter(){
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
    this.converterProvider.onNumberSelected(theNum);
  } 

   clearText(){
    this.converterProvider.clearText();
  }

 /*  formatDozenal(input: String){
    return input.replace("a", "x").replace("b","e");
  } */

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
