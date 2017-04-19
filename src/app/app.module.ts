import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasteProfile } from '../pages/tasteProfile/tasteProfile';
import { BeerProfile } from '../pages/beerProfile/beerProfile';
import { FriendsList } from '../pages/friendsList/friendsList';
import { Settings } from '../pages/settings/settings';
import { TermsOfUse } from '../pages/termsOfUse/termsOfUse';
import { Help } from '../pages/help/help';
import { Login } from '../pages/login/login';

import { PrivacyPolicy } from '../pages/privacyPolicy/privacyPolicy';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TasteProfile,
    FriendsList,
    Settings,
    TermsOfUse,
    Help,
    PrivacyPolicy,
    BeerProfile,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasteProfile,
    FriendsList,
    Settings,
    TermsOfUse,
    Help,
    PrivacyPolicy,
    BeerProfile,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
