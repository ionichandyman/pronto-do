import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { ProjectNote } from '../../app/projectnotes';
import { AddNotesPage } from '../add-notes/add-notes';
import {CommonFunctions} from '../../app/helpers/commonfunctions';
import { GroupProvider } from '../../providers/group-provider';
import {GroupsPage} from '../groups/groups';
import {OutboxPage} from '../outbox/outbox';
import {MytaskPage} from '../mytask/mytask';
import { Subject } from 'rxjs/Subject';

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
  commonFn = new CommonFunctions();
  assignedTab = OutboxPage;
  projectsTab = GroupsPage;
  myTaskTab = MytaskPage;
  userid;
  tabParams = {userid : ""}

  notesSubject;
  groupNotes;
  options;
  constructor(public navCtrl: NavController, public navParams: NavParams,public groupService : GroupProvider) {
    this.projectKey = navParams.get("projectKey");
    this.userId = navParams.get("userid");
    this.projectName = navParams.get("projectName");
    this.notesSubject = new Subject();
    this.options = "Tasks";
    this.notesSubject.subscribe((data)=>{
      this.groupNotes = data;
      this.groupNotes.reverse();
      console.log('groups xxloaded');
    });
    groupService.loadGroupNotes(this.projectKey,this.notesSubject);

   // this.ref = firebase.database().ref('projects/' + this.projectKey +'/projectNotes/');
    //this.refRead = firebase.database().ref('projects/' + this.projectKey +'/projectNotes/').orderByChild('joinDate');
   //this.addNotes();
   // this.refRead.on('value',resp=>{
   //   this.projectTasks =this.commonFn.snapShotToArray(resp);
    //  this.projectTasks.reverse();
    //});
  }
 addTask(){
   alert(this.projectKey + " - projectNOTES");
  this.navCtrl.push(AddNotesPage,{projectKey:this.projectKey,projectName:this.projectName,userid : this.userId});
  }
 addNotes(){
   var me=this;
  let newData = this.ref.push();
  newData.set({
    projectNotes : me.userId +" has joined ",
    messages : "projectData.messages",
    type : "logentry",
    loginId : me.userId,
    joinDate : Date(),
    createdBy : me.userId
  });
 }
 addMembers(){

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
