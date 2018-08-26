import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { GroupProvider } from '../../providers/group-provider';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public groupService : GroupProvider) {
      this.projectKey = navParams.get("projectKey");
      this.projectName = navParams.get("projectName");
      this.userid = navParams.get("userid");
      alert('add-notes constructor');
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
    alert(this.userid);
  }
  addProjectNotes(){
    var me=this;
    let datax;
    this.refUserTask =  firebase.database().ref('user/' + this.taskOwner).child('tasks');
    this.refCreatorTask = firebase.database().ref('user/' + this.userid).child('outbox');
   
    datax =  {
      projectName : me.projectName,
      projectNotes :me.projectNotes,
      messages : me.messages,
      type : 'notes',
      taskOwner :me.taskOwner,
      taskOwnerId : me.taskOwner,
      joinDate : Date(),
       status : 'P',
       createdBy : me.userid
    };
    this.groupService.addGroupNotes(this.projectKey ,datax);
    /*
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
    */
       this.navCtrl.pop();
  }
}
