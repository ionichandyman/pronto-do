import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the AddProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-projects',
  templateUrl: 'add-projects.html',
})
export class AddProjectsPage {
  data = {projectName:''};
  ref = firebase.database().ref('projects/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addProjectData(){
    let newData = this.ref.push();
    newData.set({
      projectName : this.data.projectName
    });
    this.navCtrl.pop();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProjectsPage');
  }

}
