import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProjectNote } from '../../app/projectnotes';
import { AddNotesPage } from '../add-notes/add-notes';

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
   //this.addNotes();
    this.refRead.on('value',resp=>{
      this.projectTasks = snapshotToArray(resp);
      this.projectTasks.reverse();
    });
  }
 addTask(){
  this.navCtrl.push(AddNotesPage,{projectKey:this.projectKey,projectName:this.projectName});
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
 close(selectedItem){
  
  let dataForEdit =this.ref.child(selectedItem);
  dataForEdit.update({
    "status" : "C"
  }).then(function(){
    alert("Successfully updated")
  }).catch(function(error){
    alert("Unable to update")
  })
 }
 reOpen(selectedItem){
  let dataForOpen =  this.ref.child(selectedItem);
  dataForOpen.update({
    "status" : "P",
    "joinDate" : Date()
  }).then(function(){
    alert("Successfully updated")
  }).catch(function(error){
    alert("Unable to update")
  })
 }
 delete(selectedItem){
  this.ref.child(selectedItem).remove();

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