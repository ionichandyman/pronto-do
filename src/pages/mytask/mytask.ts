import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the MytaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html',
})
export class MytaskPage {
  userid;
  refUserTask;
  projectNotes;
  tabParams = {userid : ""}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userid = navParams.get("userid");
    this.refUserTask =  firebase.database().ref('user/' + this.userid).child('tasks');
    this.tabParams.userid = this.userid;
    this.refUserTask.on('value',resp=>{
      this.projectNotes = [];
      this.projectNotes = snapshotToArray(resp);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytaskPage');
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