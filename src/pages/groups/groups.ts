import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectsNotesPage} from '../projects-notes/projects-notes';
import {AddGroupPage} from '../add-group/add-group';
import {EditGroupPage} from '../edit-group/edit-group';
import {CommonFunctions} from '../../app/helpers/commonfunctions'
import { GroupProvider } from '../../providers/group-provider';
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  groupSubject;
  userId:'';
  localGroups;


  constructor(public navCtrl: NavController, public navParams: NavParams,public groupService : GroupProvider) {
    this.userId = navParams.get("userid");
    this.groupSubject = new Subject();
  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    //1. I created a subject because the call to the provider is an async call
    //2. There's a chance that the view had loaded but the service hasn't responded back
    //3. When we call the service, we pass the subject created here on the function.
    //4. Once task has completed, [subject].next([data]) is used to push the data back to the calling entity
    this.groupSubject.subscribe((data)=>{
      this.localGroups = data;
      console.log('groups loaded');
    });
    this.groupService.loadGroups(this.userId,this.groupSubject);
  }
  addProjects(){
    this.navCtrl.push(AddGroupPage,{userId : this.userId});
  }
  goToProject(key,text){
    var me=this;
    this.navCtrl.push(ProjectsNotesPage,{projectKey : key,userid : me.userId,projectName : text});
  }
  delete(selectedItem){
    this.groupService.deleteItem(selectedItem);
  }
  edit(selectedItem){
    this.navCtrl.push(EditGroupPage,{selectedGroup:selectedItem});
  }
}
