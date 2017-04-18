import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { TasteProfile } from '../tasteProfile/tasteProfile';
import { FriendsList } from '../friendsList/friendsList';
import { Settings } from '../settings/settings';
import { BeerProfile } from '../beerProfile/beerProfile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userID: any;
  constructor(public navCtrl: NavController, public params: NavParams, private barcodeScanner: BarcodeScanner) {
    this.userID = "current user";
  }

  //This function switches pages.
  //Input: Number corresponding to the page you want to push onto the stack
  //Output: Pushes said page onto the nav stack
  goToPage($page){
    switch($page){
      case 1:
        this.navCtrl.push(TasteProfile, {
          userID: this.userID
        });
        break;
      case 2:
        this.navCtrl.push(FriendsList, {
          userID: this.userID
        });
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
