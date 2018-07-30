import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectsNotesPage} from '../projects-notes/projects-notes';
import {AddProjectsPage} from '../add-projects/add-projects';
import {EditProjectsPage} from '../edit-projects/edit-projects';

import * as firebase from 'firebase';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  data = {username:""};
  projects=[];
  ref = firebase.database().ref('projects/');
  userId:'';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get("userid");
    
    this.ref.on('value',resp=>{
      this.projects = [];
      this.projects = snapshotToArray(resp);
    });

  }
 ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  
  }
  addProjects(){
    this.navCtrl.push(AddProjectsPage);
  }
  
  goToProject(key,text){
    var me=this;
    this.navCtrl.push(ProjectsNotesPage,{projectKey : key,userid : me.userId,projectName : text});
  }
  delete(selectedItem){
    this.ref.child(selectedItem).remove();
  }
  edit(selectedItem){
    
    this.navCtrl.push(EditProjectsPage,{selectedKey:selectedItem});
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};