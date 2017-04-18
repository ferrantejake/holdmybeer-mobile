import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-BeerProfile',
  templateUrl: 'BeerProfile.html'
})
export class BeerProfile {
  posts: any;
  url: string = '';
  barcode: string = '08002541';
  name: string ='NAME';
  brewery: string =  'N/A';
  style: string = 'N/A';
  availability: string = 'N/A';
  abv: string = 'N/A';
  ibu: string = 'N/A';
  srm: string = 'N/A';
  og: string = 'N/A';
  description: string = 'N/A';
  picture: string = '';

  constructor(public navCtrl: NavController, public params: NavParams, public http: Http, private barcodeScanner: BarcodeScanner) {
    this.barcode =  params.get("barcode");
    console.log(this.barcode);
    this.url = 'http://holdmybeer.azurewebsites.net/beer/' + this.barcode;
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.initInfo(data);
    });
  }

  initInfo(data){
    this.name = data.name;
    //this.brewery = ??
    //this.style = ??
    this.availability = data.available.name;
    this.abv = data.abv + '%';
    this.ibu = data.ibu;
    this.srm = data.srm.name;
    //this.og = ??
    this.description = data.description;
    this.picture = data.labels.medium;
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
