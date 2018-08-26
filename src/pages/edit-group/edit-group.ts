import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { GroupProvider } from '../../providers/group-provider';
/**
 * Generated class for the EditProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-group',
  templateUrl: 'edit-group.html',
})
export class EditGroupPage {
  selectedKey :'';
  projectData;
  ref;
  selectedGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public groupProvider : GroupProvider) {
    this.selectedGroup = navParams.get("selectedGroup");
    alert(this.selectedGroup.groupName);
    alert(this.selectedGroup.key);
  } 
  submitChange(){
    var me=this;
    this.selectedGroup.groupName = this.projectData.groupName;
    this.groupProvider.editGroup(this.selectedGroup);
    me.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProjectsPage');
  }

}
