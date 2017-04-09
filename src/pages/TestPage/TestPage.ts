import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-TestPage',
  templateUrl: 'TestPage.html'
})
export class TestPage {

  constructor(public navCtrl: NavController) {
    
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}