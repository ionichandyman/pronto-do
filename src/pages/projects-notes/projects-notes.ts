import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProjectNote } from '../../app/projectnotes';

/**
 * Generated class for the ProjectsNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects-notes',
  templateUrl: 'projects-notes.html',
})

export class ProjectsNotesPage {
  projectKey:'';
  projectCloudNotes;
  userId :'';
  ref;
  projectName:'';
  projectTasks;
  refRead;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projectKey = navParams.get("projectKey");
    this.userId = navParams.get("userId");
    this.projectName = navParams.get("projectName");

    this.ref = firebase.database().ref('projects/' + this.projectKey +'/projectNotes/');
    this.refRead = firebase.database().ref('projects/' + this.projectKey +'/projectNotes/').orderByChild('joinDate');

    this.addNotes();
    this.refRead.on('value',resp=>{
      this.projectTasks = snapshotToArray(resp);
      this.projectTasks.reverse();
    });
  }
 addNotes(){
   var me=this;
  let newData = this.ref.push();
  newData.set({
    projectNotes : me.userId +" has joined ",
    messages : "projectData.messages",
    type : "logentry",
    loginId : "uncajy",
    joinDate : Date()
  });
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsNotesPage');
  }

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      
      item.key = childSnapshot.key;
      returnArr.push(item);
  })

  return returnArr;
}