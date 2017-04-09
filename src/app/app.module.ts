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
import { PrivacyPolicy } from '../pages/privacyPolicy/privacyPolicy';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
    BeerProfile
  ],
  imports: [
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
    BeerProfile
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
