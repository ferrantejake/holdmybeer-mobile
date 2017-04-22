import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { BeerProfile } from '../beerProfile/beerProfile';

import { HTTP } from '@ionic-native/http';
import * as access from '../access'


@Component({
  selector: 'page-tasteProfile',
  templateUrl: 'tasteProfile.html'
})
export class TasteProfile {
  //userID denotes user
  userID: any;
  //Current query in search
  searchQuery: string = '';
  //Current user's suggestions
  suggestions: string[];
  //Current user's beer log
  beerLog;
  done = false;
  seed = '';

  constructor(public navCtrl: NavController, public params: NavParams, private barcodeScanner: BarcodeScanner, private http: HTTP) {
    (this as any).view = "suggestions";
    this.userID = params.get("userID");
    this.initHistory();
    setTimeout(this.initSuggestions(), 5000);
  }

  //I apologize but it's 6:37AM and I don't know promises well enough to deal with ansynchronous stuff right now 
  //EDIT: It's 7:12 and still not working, I need to go home and take a break
  //I'm just trying to seed the suggestions so I can get the suggestions and it turned out stupid, my bad
  initSuggestions() {
    this.http.get('http://holdmybeer.azurewebsites.net/api/beer/' + this.seed + '/related', {}, {
      'Authorization': access.getToken(),
      'Content-type': 'application/json'
    }).then(data => {
      try {
        const sug = JSON.parse(data.data);
        console.log(sug);
        this.suggestions = sug.items;
      }
      catch (err) {
        alert(err);
      }
    });
  }

  initHistory() {
    this.http.get('http://holdmybeer.azurewebsites.net/api/account/' + this.userID + '/log', {}, {
      'Authorization': access.getToken(),
      'Content-type': 'application/json'
    }).then(data => {
      try {
        const log = JSON.parse(data.data);
        this.beerLog = log.items;
        console.log(log.items);
        console.log(this.beerLog);
        this.seed = this.beerLog.drinkId;
      }
      catch (err) {
        alert(err);
      }
    });
  }

  //DOESN'T WORK
  getSuggestions(ev: any) {
    //Reset list back to full list
    this.initSuggestions();

    //Set val to current search query
    let search = ev.target.value;

    //If the value is an empty string don't filter the list
    if (search && search.trim() != '') {
      this.suggestions = this.suggestions.filter((Beer) => {
        return (Beer.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }

  }

  //DOESN'T WORK
  getHistory(ev: any) {
    //Reset list back to full list
    this.initHistory();

    //Set val to current search query
    let search = ev.target.value;

    //If the value is an empty string don't filter the list
    if (search && search.trim() != '') {
      this.beerLog = this.beerLog.filter((Beer) => {
        return (Beer.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }

  }

  beerSelected(drinkUpc) {
    this.navCtrl.push(BeerProfile, {
      barcode: drinkUpc
    });
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

  beginScanning() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.pushToBeerProfile(barcodeData.text);
    }, (err) => {
      alert(err);
    });
  }

  pushToBeerProfile(barcode) {
    if (barcode != "") {
      this.navCtrl.push(BeerProfile, {
        barcode: barcode
      });
    }
  }
}