import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the OutboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-outbox',
  templateUrl: 'outbox.html',
})
export class OutboxPage {
  userid;
  taskRef;
  projectNotes;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userid = navParams.get("userid");
    this.taskRef = firebase.database().ref('user/' + this.userid).child('outbox');
    
    this.taskRef.on('value',resp=>{
      this.projectNotes = [];
      this.projectNotes = snapshotToArray(resp);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutboxPage');
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};