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
  }

  appenNum(num: string){
    if (this.numberOutput.text=="0")
    {
      this.numberOutput.text = num;
    }
    else
    {
      let temp = this.numberOutput.text.concat(num);
      this.numberOutput.text = temp;
    }
    
  }

  clearText(){
    this.numberOutput.text = "0";
  }

}
