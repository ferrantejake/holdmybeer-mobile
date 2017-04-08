import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-termsOfUse',
  templateUrl: 'termsOfUse.html'
})
export class TermsOfUse {

  constructor(public navCtrl: NavController) {
    
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}