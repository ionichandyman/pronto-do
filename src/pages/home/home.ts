import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tabs } from 'ionic-angular/navigation/nav-interfaces';

import { ViewChild }  from '@angular/core'
import {ProjectsPage} from '../projects/projects';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  projectTab;
  assignedTab;
  projectsTab = ProjectsPage;
  constructor(public navCtrl: NavController) {

  }
  
}
