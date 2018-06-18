import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectsNotesPage } from '../pages/projects-notes/projects-notes';
import { AddProjectsPage } from '../pages/add-projects/add-projects';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ProjectsPage } from '../pages/projects/projects';
import {EditProjectsPage} from '../pages/edit-projects/edit-projects';
import {AddNotesPage} from '../pages/add-notes/add-notes';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddProjectsPage,
    ProjectsNotesPage,
    ProjectsPage,
    SignInPage,
    EditProjectsPage,
    AddNotesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddProjectsPage,
    ProjectsNotesPage,
    ProjectsPage,
    SignInPage,
    EditProjectsPage,
    ProjectsNotesPage,
    AddNotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
