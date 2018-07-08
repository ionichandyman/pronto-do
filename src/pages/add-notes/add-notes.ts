import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the AddNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-notes',
  templateUrl: 'add-notes.html',
})
export class AddNotesPage {
  projectKey:'';
  projectName:'';
  taskName:'';
  taskOwner:'';
  taskStartDate:'';
  taskEndDate:'';
  taskDescription:'';
  projectNotes : '';
  messages :'';
  type : '';
  loginId :'';
  joinDate:'';
  ref;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.projectKey = navParams.get("projectKey");
      this.projectName = navParams.get("projectName");
      this.ref = firebase.database().ref('projects/' + this.projectKey+'/projectNotes/');
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
  }
  addProjectNotes(){
    
    var me=this;
    let newData = this.ref.push();
    newData.set({
      projectNotes :this.projectNotes,
      messages : this.messages,
      type : 'notes',
      loginId :this.taskOwner,
      joinDate : Date()
    });
    this.navCtrl.pop();
  }
}
