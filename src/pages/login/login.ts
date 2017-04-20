import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
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

    token: string = '';
    uniqueId: string = '';
    url: string = '';

    constructor(public navCtrl: NavController, private iab: InAppBrowser, private http: Http, private device: Device) {
        this.uniqueId = device.uuid;
        
        console.log(this.uniqueId);
    }

    login() {
        const browser = this.iab.create(
            'http://dev-holdmybeer.azurewebsites.net/api/account/login?uniqueId=' + this.uniqueId);

        browser.on('loadstop').subscribe(data=>{
            this.url = data.url;
            console.log(this.url);
        });
    }
}