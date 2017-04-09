import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-BeerProfile',
  templateUrl: 'BeerProfile.html'
})
export class BeerProfile {

  constructor(public navCtrl: NavController) {
    
  }

  goHome(){
    this.navCtrl.popToRoot();
  }
}
