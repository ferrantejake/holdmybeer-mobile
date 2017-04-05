import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tasteProfile',
  templateUrl: 'tasteProfile.html'
})
export class TasteProfile {

  constructor(public navCtrl: NavController, public params: NavParams) {
    (this as any).view = "suggestions";
    
  }

}