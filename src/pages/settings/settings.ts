import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { TermsOfUse } from '../termsOfUse/termsOfUse';
import { PrivacyPolicy } from '../privacyPolicy/privacyPolicy';
import { Help } from '../help/help';
import { Login } from '../login/login';
import { HTTP } from '@ionic-native/http'
import { BeerProfile } from '../beerProfile/beerProfile';

import * as access from '../access';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private http: HTTP) {
    
  }

  //This function switches pages.
  //Input: Number corresponding to the page you want to push onto the stack
  //Output: Pushes said page onto the nav stack
  goToPage($page){
    switch($page){
      case 1:
        this.navCtrl.push(TermsOfUse);
        break;
      case 2:
        this.navCtrl.push(PrivacyPolicy);
        break;
      case 3:
        this.http.post('http://holdmybeer.azurewebsites.net/api/account/logout', {}, {
        'Authorization': access.getToken(),
        'Content-type': 'application/json'
        });
        this.navCtrl.push(Login);
        break;
      default:
        alert("Incorrect Page Directory");
    }
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  beginScanning(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.pushToBeerProfile(barcodeData.text);
    }, (err) => {
      alert(err);
    });    
  }

  pushToBeerProfile(barcode)
  {
    if(barcode != "")
    {
      this.navCtrl.push(BeerProfile, {
        barcode: barcode
      });
    }
  } 

}