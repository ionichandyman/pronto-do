import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GroupProvider} from '../../providers/group-provider';
/**
 * Generated class for the AddMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-members',
  templateUrl: 'add-members.html',
})
export class AddMembersPage {
  username;
  mobileno;
  email;
  projectKey;
  groupName;
  constructor(public navCtrl: NavController, public navParams: NavParams,public groupProvider:GroupProvider) {
    this.projectKey = this.navParams.get("projectKey");
    this.groupName = this.navParams.get("groupName");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMembersPage');
  }
  addMembers(){
    this.groupProvider.addMembers({username:this.username,mobileno:this.mobileno,email:this.email,key:this.projectKey,groupName : this.groupName});
    this.navCtrl.pop();

  }
}
