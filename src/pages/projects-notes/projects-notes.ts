import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotesPage } from '../add-notes/add-notes';
import {CommonFunctions} from '../../app/helpers/commonfunctions';
import { GroupProvider } from '../../providers/group-provider';
import {GroupsPage} from '../groups/groups';
import {OutboxPage} from '../outbox/outbox';
import {MytaskPage} from '../mytask/mytask';
import { Subject } from 'rxjs/Subject';
import {AddMembersPage} from '../add-members/add-members';
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

  
  groupNotes;
  options;
  membersList;
  membersSubject;
  notesSubject;

  constructor(public navCtrl: NavController, public navParams: NavParams,public groupService : GroupProvider) {
    this.projectKey = navParams.get("projectKey");
    this.userId = navParams.get("userid");
    this.projectName = navParams.get("projectName");
    this.notesSubject = new Subject();
    this.membersSubject = new Subject();
     this.options = "Tasks";
    
    this.notesSubject.subscribe((data)=>{
      alert('loaded notes')
      this.groupNotes = data;
      this.groupNotes.reverse();
    
    });
    this.membersSubject.subscribe((data)=>{
   
      this.membersList = data;
      console.log('members loaded');
    });
    groupService.loadGroupNotes(this.projectKey,this.notesSubject);
    groupService.loadGroupMembers(this.projectKey,this.membersSubject);

  }
 addTask(){
   
  this.navCtrl.push(AddNotesPage,{projectKey:this.projectKey,projectName:this.projectName,userid : this.userId});
  }
 addMembers(){
  this.navCtrl.push(AddMembersPage,{projectKey:this.projectKey,userId : this.userId,groupName : this.projectName});
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
 delete(selectedItem,projectKey){
  //this.ref.child(selectedItem).remove();
  alert(projectKey);
  alert(selectedItem.key);
  this.groupService.deleteItem(selectedItem,projectKey)

 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsNotesPage');
    alert('loaded');
    
  }

}
