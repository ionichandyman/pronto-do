import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

import { ViewChild }  from '@angular/core'
import {GroupsPage} from '../groups/groups';
import {OutboxPage} from '../outbox/outbox';
import {MytaskPage} from '../mytask/mytask';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  projectTab;
  assignedTab = OutboxPage;
  projectsTab = GroupsPage;
  myTaskTab = MytaskPage;
  userid;
  tabParams = {userid : ""}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userid = navParams.get("userid");
    this.tabParams.userid = this.userid;
    
  }
 }
