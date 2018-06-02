import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProjectsPage } from './edit-projects';

@NgModule({
  declarations: [
    EditProjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProjectsPage),
  ],
})
export class EditProjectsPageModule {}
