import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { TasteProfile } from '../tasteProfile/tasteProfile';
import { FriendsList } from '../friendsList/friendsList';
import { Settings } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  }

  //This function switches pages.
  //Input: Number corresponding to the page you want to push onto the stack
  //Output: Pushes said page onto the nav stack
  goToPage($page){
    switch($page){
      case 1:
        this.navCtrl.push(TasteProfile);
        break;
      case 2:
        this.navCtrl.push(FriendsList);
        break;
      case 3:
        this.navCtrl.push(Settings);
        break;
      default:
        alert("Incorrect Page Directory");
    }
  }

  beginScanning(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData.text);
    }, (err) => {
      alert(err);
    });    
  }
  
}
