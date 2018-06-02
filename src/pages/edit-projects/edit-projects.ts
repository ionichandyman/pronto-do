import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';

/**
 * Generated class for the EditProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-projects',
  templateUrl: 'edit-projects.html',
})
export class EditProjectsPage {
  selectedKey :'';
  projectData;
  ref;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedKey = navParams.get('selectedKey');
    alert(this.selectedKey);
    this.ref=firebase.database().ref('projects/' + this.selectedKey);
    this.ref.once('value').then(res=>{
      this.projectData = res.val();
    });

  } 
  submitChange(){
    var me=this;
    this.ref.update({
      "projectName" : this.projectData.projectName
    }).then(function(){
      alert("Update successful");
      me.navCtrl.pop();
    }).catch(function(error){
      alert("Update Failed" + error);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProjectsPage');
  }

}
