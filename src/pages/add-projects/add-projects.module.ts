import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProjectsPage } from './add-projects';

@NgModule({
  declarations: [
    AddProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProjectsPage),
  ],
})
export class AddProjectsPageModule {}
