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
  refUserTask;
  refCreatorTask;
  newTask;
  userid;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.projectKey = navParams.get("projectKey");
      this.projectName = navParams.get("projectName");
      this.userid = navParams.get("userid");
      this.ref = firebase.database().ref('projects/' + this.projectKey+'/projectNotes/');
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
    alert(this.userid);
  }
  addProjectNotes(){
    var me=this;
    let newData = this.ref.push();
    this.refUserTask =  firebase.database().ref('user/' + this.taskOwner).child('tasks');
    this.refCreatorTask = firebase.database().ref('user/' + this.userid).child('outbox');
    newData.set({
      projectName : me.projectName,
      projectNotes :me.projectNotes,
      messages : me.messages,
      type : 'notes',
      taskOwner :me.taskOwner,
      taskOwnerId : me.taskOwner,
      joinDate : Date(),
       status : 'P',
       createdBy : me.userid
    });
    this.refUserTask.child(newData.getKey()).set({
      projectNotes : me.projectNotes,
      projectName : me.projectName,
      messages : me.messages,
      type : 'notes',
      taskOwner : me.taskOwner,
      taskOwnerId : me.taskOwner,
      createDate : Date(),
      status : 'P',
      createdBy : me.userid
    });
    this.refCreatorTask.child(newData.getKey()).set({
      projectName : me.projectName,
      projectNotes : me.projectNotes,
      messages : me.messages,
      type : 'notes',
      taskOwner : me.taskOwner,
      taskOwnerId : me.taskOwner,
      createDate : Date(),
      status : 'P',
      createdBy : me.userid
    });
       this.navCtrl.pop();
  }
}
