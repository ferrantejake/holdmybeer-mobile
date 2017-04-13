import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-privacyPolicy',
  templateUrl: 'privacyPolicy.html'
})
export class PrivacyPolicy {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  beginScanning(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData.text);
    }, (err) => {
      alert(err);
    });    
  }

}