import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import {CommonFunctions} from '../../app/helpers/commonfunctions';
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
  commonFn = new CommonFunctions();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userid = navParams.get("userid");
    this.taskRef = firebase.database().ref('user/' + this.userid).child('outbox');
    
    this.taskRef.on('value',resp=>{
      this.projectNotes = [];
      this.projectNotes = this.commonFn.snapShotToArray(resp);

    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutboxPage');
  }

}
