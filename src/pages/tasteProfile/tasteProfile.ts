import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BeerProfile } from '../beerProfile/beerProfile';


@Component({
  selector: 'page-tasteProfile',
  templateUrl: 'tasteProfile.html'
})
export class TasteProfile {
  //userID denotes user
  userID: any;
  //Current query in search
  searchQuery: string='';
  //Current user's suggestions
  suggestions: string[];
  //Current user's beer log
  beerLog: string[];

  constructor(public navCtrl: NavController, public params: NavParams, private barcodeScanner: BarcodeScanner) {
    (this as any).view = "suggestions";
    this.userID = params.get("userID");
    this.initSuggestions();
    this.initHistory();
    console.log("This is " + this.userID + "'s Profile");
  }

  //Initialize beer suggestions for this user by calling API based on userID
  //Currently using placeholder text
  initSuggestions(){
    this.suggestions = [
      'Purple Haze',
      'Coors light',
      'Mountain Dew',
      'Apple juice'
    ];
  }

  //Initialize beer history for this user by calling API based on userID
  //Currently using placeholder text
  initHistory(){
    this.beerLog = [
      'Bud Light',
      'Natty light',
      'Corona',
      'Coors'
    ];
  }

  getSuggestions(ev: any){
    //Reset list back to full list
    this.initSuggestions();

    //Set val to current search query
    let search = ev.target.value;

    //If the value is an empty string don't filter the list
    if(search && search.trim() != ''){
      this.suggestions = this.suggestions.filter((Beer) => {
        return (Beer.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }

  }

  getHistory(ev: any){
    //Reset list back to full list
    this.initHistory();

    //Set val to current search query
    let search = ev.target.value;

    //If the value is an empty string don't filter the list
    if(search && search.trim() != ''){
      this.beerLog = this.beerLog.filter((Beer) => {
        return (Beer.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }

  }

  //TODO: Pass what beer is being looked at to the beer profile page
  beerSelected(Beer){
    this.navCtrl.push(BeerProfile);
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