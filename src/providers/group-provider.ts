import { HttpClient } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
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
  refKnownGroups;
  current

  userTasks;
  constructor() {
    console.log('pronto-provider');

  }
  loadUserTask(userId,givenSubject)
  {
    this.refUserTask = firebase.database().ref('user/' + userId + '/tasks/');
   this.refUserTask.on('value',resp=>{
      //this.groupsRepo.next(this.commonFn.snapShotToArray(resp));
      this.userTasks = this.commonFn.snapShotToArray(resp);
      alert(this.userTasks);
      givenSubject.next(this.userTasks);//inform subject that task is done.
    });

  }
  updateUserTask(taskItem){
    if(this.refUserTask!=null){
      this.refUserTask.child(taskItem.key).set(taskItem);
    }
    if(this.refNotes!=null){
      this.refNotes.child(taskItem.key).set(taskItem);
    }
    this.refOutBoxTask = firebase.database().ref('user/'+taskItem.createdBy+'/outbox').child(taskItem.key);
    this.refOutBoxTask.set(taskItem);

  
  }
  loadGroups(userId,givenSubject){
    this.ref = firebase.database().ref('user/' + userId + '/groups/');
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
    data.key = noteData.key;

    this.addUsersTasks(noteData.key,data);
    this.logCreatorTask(noteData.key,data);
  }
  addKnownGroups(data){
    if(this.refKnownGroups==null){
      this.refKnownGroups = firebase.database().ref('knowngroups/' + data.key);
    }
    this.refKnownGroups.set(data);
  }
  addUserGroup(userNo,groupNo,gName){

    this.refUserGroup = firebase.database().ref('user/' + userNo +'/groups/' + groupNo);
    let userGroupData;
    userGroupData = {
      userId : userNo,
      groupName : gName  
   };
     this.refUserGroup.set(userGroupData);
 }
  logCreatorTask(key,data){
    this.refOutBoxTask = firebase.database().ref('user/'+data.createdBy+'/outbox').child(key);
    this.refOutBoxTask.set(data);

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
      alert(groupKey);
      this.refMember.on('value',resp=>{
        this.groupMember = this.commonFn.snapShotToArray(resp);
        subject.next(this.groupMember);
      });
    }else{
      subject.next(this.groupMember)

    }
  }
  addUsersTasks(key,data){
    this.refUserTask =  firebase.database().ref('user/' + data.taskOwner+'/tasks').child(key);
    this.refUserTask.set(data);

    this.refUserTask.set(data);
  }
  deleteItem(data,pk){
    // this.ref.child(selectedItem).remove();
    this.refUserTask = firebase.database().ref('user/' + data.taskOwner+'/tasks').child(data.key);
    this.refNotes = firebase.database().ref('groups/' + pk).child('tasks').child(data.key);
    this.refOutBoxTask = firebase.database().ref('user/'+data.createdBy+'/outbox').child(data.key);
    this.refUserTask.set(null);
    this.refNotes.set(null);
    this.refOutBoxTask.set(null);

    
    
  }
  addGroup(data,userId){
    let newData = this.ref.push();
    newData.set({
      groupName : data.groupName
    });
   //this.addUserGroup(userId,newData.key,data.groupName);
   data.key = newData.key;
   this.addKnownGroups(data);
   return data.key;
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
