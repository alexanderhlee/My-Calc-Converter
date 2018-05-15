import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HexadecimalPage } from '../pages/hexadecimal/hexadecimal';
import { DozenalPage } from '../pages/dozenal/dozenal';
import { DecimalPage } from '../pages/decimal/decimal';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NumberButtonComponent } from '../components/numberbutton/numberbutton';
import { ScreenOutputComponent } from '../components/screen-output/screen-output';
import { ConverterProvider } from '../providers/converter/converter';

@NgModule({
  declarations: [
    MyApp,
    HexadecimalPage,
    DozenalPage,
    DecimalPage,
    TabsPage,
    NumberButtonComponent,
    ScreenOutputComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HexadecimalPage,
    DozenalPage,
    DecimalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConverterProvider
  ]
})
export class AppModule {}
