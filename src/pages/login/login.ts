import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HomePage } from '../home/home';
import * as access from '../access';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class Login {

    private token;

    constructor(public navCtrl: NavController, private iab: InAppBrowser, private http: Http) {
        
    }

    login() {
        const browser = this.iab.create('http://localhost:3000/api/account/login');
    }
}