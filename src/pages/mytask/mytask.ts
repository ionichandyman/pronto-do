import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { CommonFunctions } from '../../app/helpers/commonfunctions';
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
  tabParams = {userid : ""};
  commonFn = new CommonFunctions();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userid = navParams.get("userid");
    this.refUserTask =  firebase.database().ref('user/' + this.userid).child('tasks');
    this.tabParams.userid = this.userid;
    this.refUserTask.on('value',resp=>{
      this.projectNotes = [];
      this.projectNotes = this.commonFn.snapShotToArray(resp);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytaskPage');
  }

}
