import { Component } from '@angular/core';
import { HexadecimalPage } from '../hexadecimal/hexadecimal';
import { DozenalPage } from '../dozenal/dozenal';
import { DecimalPage } from '../decimal/decimal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DecimalPage;
  tab2Root = HexadecimalPage;
  tab3Root = DozenalPage;

  constructor() {

  }
}
