import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BeerProfile } from '../beerProfile/beerProfile';


@Component({
  selector: 'page-termsOfUse',
  templateUrl: 'termsOfUse.html'
})
export class TermsOfUse {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
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