import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TasteProfile } from '../tasteProfile/tasteProfile';

@Component({
  selector: 'page-friendsList',
  templateUrl: 'friendsList.html'
})
export class FriendsList {
  //userID denotes user
  userID: any;
  //Current query in search
  searchQuery: string='';
  //List of current user's friends
  friends: string[];

  constructor(public navCtrl: NavController, public params: NavParams, private barcodeScanner: BarcodeScanner) {
    this.userID = params.get("userID");
    this.initList();

  }

  //Initialize list of friends for this user by calling API based on userID
  //Currently using placeholder text
  initList(){
    this.friends = [
      'Jake',
      'Brett',
      'Matt',
      'Camilo',
      'Fernando',
      'Kirk'
    ];
  }

  getFriends(ev: any){
    //Reset list back to full list
    this.initList();

    //Set val to current search query
    let search = ev.target.value;

    //If the value is an empty string don't filter the list
    if(search && search.trim() != ''){
      this.friends = this.friends.filter((friend) => {
        return (friend.toLowerCase().indexOf(search.toLowerCase()) > -1);
      })
    }

  }

  //TODO: When the user clicks a friend take them to the friend's profile
  friendSelected(friend){
    this.navCtrl.push(TasteProfile, {
      userID: friend
    });
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  beginScanning(){
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log(barcodeData.text);
    }, (err) => {
      alert(err);
    });    
  }


}