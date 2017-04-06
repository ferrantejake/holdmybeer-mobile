import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TermsOfUse } from '../termsOfUse/termsOfUse';
import { PrivacyPolicy } from '../privacyPolicy/privacyPolicy';
import { Help } from '../help/help';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController) {
    
  }

  //This function switches pages.
  //Input: Number corresponding to the page you want to push onto the stack
  //Output: Pushes said page onto the nav stack
  goToPage($page){
    switch($page){
      case 1:
        this.navCtrl.push(TermsOfUse);
        break;
      case 2:
        this.navCtrl.push(PrivacyPolicy);
        break;
      case 3:
        this.navCtrl.push(Help);
        break;
      default:
        alert("Incorrect Page Directory");
    }
  }

}