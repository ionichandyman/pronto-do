import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectsNotesPage } from './projects-notes';

@NgModule({
  declarations: [
    ProjectsNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectsNotesPage),
  ],
})
export class ProjectsNotesPageModule {}
