import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { GroupProvider } from '../../providers/group-provider';
/**
 * Generated class for the AddProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html',
})
export class AddGroupPage {
  data = {groupName:''};
  ref = firebase.database().ref('groups/');

  constructor(public navCtrl: NavController, public navParams: NavParams,public groupProvider : GroupProvider) {
  }
  addProjectData(){
    this.groupProvider.addGroup(this.data);
    this.navCtrl.pop();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGroupPage');
  }

}
