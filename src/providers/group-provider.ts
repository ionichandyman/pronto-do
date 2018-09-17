import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {CommonFunctions} from '../app/helpers/commonfunctions';
import { IfStmt } from '@angular/compiler';

/*
  Generated class for the ProntoDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupProvider {
  knownGroups:any;
  groupNotes:any;

  commonFn = new CommonFunctions();
  ref;
  refNotes;
  refUserTask;
  refUserGroup;

  refOutBoxTask;
  refMember;
  groupMember;

  constructor() {
    console.log('pronto-provider');

  }
  loadGroups(userId,givenSubject){
    this.ref = firebase.database().ref('groups/');
    this.ref.on('value',resp=>{
      //this.groupsRepo.next(this.commonFn.snapShotToArray(resp));
      this.knownGroups =this.commonFn.snapShotToArray(resp);
      givenSubject.next(this.knownGroups);//inform subject that task is done.
    });
  }
  loadGroupNotes(key,giventSubject){
    //1. create ref for groupnotes
    if(this.refNotes==null && this.groupNotes == null){
      this.refNotes = firebase.database().ref('groups/' + key + '/tasks/');
      //2. load notes from key
      this.refNotes.on('value',resp=>{
        this.groupNotes = this.commonFn.snapShotToArray(resp);
        giventSubject.next(this.groupNotes);
      });
    }else{
      giventSubject.next(this.groupNotes);
    }
   
  }
  addGroupNotes(key,data){
    this.refNotes = firebase.database().ref('groups/' + key).child('tasks');
    let noteData = this.refNotes.push();
    noteData.set(data);
    this.addUsersTasks(data);
    this.logCreatorTask(data);
  }
  addUserGroup(userNo,groupNo,gName){
    this.refUserGroup = firebase.database().ref('user/' + userNo +"/").child("groups");
    let userGroupData = this.refUserGroup.push();
    
    userGroupData.set({
      userId : userNo,
      groupId : groupNo,
      groupName : gName
    });

  }
  logCreatorTask(data){
    this.refOutBoxTask = firebase.database().ref('user/'+data.createdBy+'/').child('outbox');
    let outboxData = this.refOutBoxTask.push();
    outboxData.set({
      projectNotes : data.projectNotes,
      projectName : data.projectName,
      messages : data.messages,
      type : 'notes',
      taskOwner : data.taskOwner,
      taskOwnerId : data.taskOwner,
      createDate : Date(),
      status : 'P',
      createdBy : data.createdBy
    });

  }
   addMembers(data){
    this.refMember = firebase.database().ref('groups/' + data.key + '/members/');
    let memberData = this.refMember.push();
    memberData.set({username:data.username,
    email : data.email,
    mobileno : data.mobileno    
    })
    this.addUserGroup(data.username,data.key,data.groupName)
  }
  loadGroupMembers(groupKey,subject){
    if(this.refMember==null && this.groupMember==null){
      this.refMember = firebase.database().ref('groups/' + groupKey + '/members/');
      
      this.refMember.on('value',resp=>{
        this.groupMember = this.commonFn.snapShotToArray(resp);
        subject.next(this.groupMember);
      });
    }else{
      subject.next(this.groupMember)

    }
  }
  addUsersTasks(data){
    this.refUserTask =  firebase.database().ref('user/' + data.taskOwner).child('tasks');
    let refUserTaskData = this.refUserTask.push();

    refUserTaskData.set({
      projectNotes : data.projectNotes,
      projectName : data.projectName,
      messages : data.messages,
      type : 'notes',
      taskOwner : data.taskOwner,
      taskOwnerId : data.taskOwner,
      createDate : Date(),
      status : 'P',
      createdBy : data.createdBy
    });

  }
  
  deleteItem(selectedItem){
    this.ref.child(selectedItem).remove();
  }
  addGroup(data){
    let newData = this.ref.push();
    newData.set({
      groupName : data.groupName
    });
  }
  editGroup(data){
    this.ref.update({
      "groupName" : data.groupName
    }).then(function(){
      console.log('success');
    }).catch(function(error){
      alert("Update Failed" + error);
    })
  }
 
}
