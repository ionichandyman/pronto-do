import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-notes',
  templateUrl: 'add-notes.html',
})
export class AddNotesPage {
  projectKey:'';
  projectName:'';
  taskName:'';
  taskOwner:'';
  taskStartDate:'';
  taskEndDate:'';
  taskDescription:'';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.projectKey = navParams.get("projectKey");
      this.projectName = navParams.get("projectName");
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotesPage');
  }

}
