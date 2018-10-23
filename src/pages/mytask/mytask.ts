import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonFunctions } from '../../app/helpers/commonfunctions';
import { GroupProvider } from '../../providers/group-provider';

import { Subject } from 'rxjs/Subject';
/**
 * Generated class for the MytaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytask',
  templateUrl: 'mytask.html',
})
export class MytaskPage {
  userid;
  userTasks;
  userTaskSubject;

  tabParams = {userid : ""};
  commonFn = new CommonFunctions();

  constructor(public navCtrl: NavController, public navParams: NavParams,public groupProvider : GroupProvider) {
    this.userid = navParams.get("userid");
    this.userTaskSubject = new Subject();
    this.userTaskSubject.subscribe((data)=>{
  
      this.userTasks = data
    })
    groupProvider.loadUserTask(this.userid,this.userTaskSubject);

  }
  delete(key){
  
  }
  rejectTask(selectedItem){
    var updatedItem = this.userTasks.filter(x=>x.key == selectedItem);
   
    if(updatedItem!=null){
      if(updatedItem.length >0){
        updatedItem[0].status = 'R';
        this.groupProvider.updateUserTask(updatedItem[0]);
      }
    }
  }
  completeTask(selectedItem)
  {
    var updatedItem = this.userTasks.filter(x=>x.key == selectedItem);
   
    if(updatedItem!=null){
      if(updatedItem.length >0){
        updatedItem[0].status = 'C';
        this.groupProvider.updateUserTask(updatedItem[0]);
      }
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MytaskPage');
  }

}