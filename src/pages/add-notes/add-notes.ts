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
  newTask;

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
    this.refUserTask =  firebase.database().ref('user/' + this.taskOwner).child('tasks');
    

    newData.set({
      projectNotes :this.projectNotes,
      messages : this.messages,
      type : 'notes',
      taskOwner :this.taskOwner,
      taskOwnerId : this.taskOwner,
      joinDate : Date(),
      createdBy:'SYSTEM',
      status : 'P'
    });
    this.refUserTask.child(newData.getKey()).set({
      projectNotes : this.projectNotes,
      messages : this.messages,
      type : 'notes',
      taskOwner : this.taskOwner,
      taskOwnerId : this.taskOwner,
      createDate : Date(),
      status : 'P'
    });

    this.navCtrl.pop();
  }
}
