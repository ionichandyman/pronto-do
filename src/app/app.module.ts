import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProjectsNotesPage } from '../pages/projects-notes/projects-notes';
import { AddGroupPage } from '../pages/add-group/add-group';
import { SignInPage } from '../pages/sign-in/sign-in';
import { GroupsPage } from '../pages/groups/groups';
import { EditGroupPage } from '../pages/edit-group/edit-group';
import {AddNotesPage} from '../pages/add-notes/add-notes';
import {OutboxPage} from '../pages/outbox/outbox';
import { MytaskPage } from '../pages/mytask/mytask';
import { GroupProvider } from '../providers/group-provider';
import { AddMembersPage } from '../pages/add-members/add-members'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddGroupPage,
    ProjectsNotesPage,
    GroupsPage,
    SignInPage,
    EditGroupPage,
    AddNotesPage,
    OutboxPage,
    MytaskPage,
    AddMembersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddGroupPage,
    ProjectsNotesPage,
    GroupsPage,
    SignInPage,
    EditGroupPage,
    ProjectsNotesPage,
    AddNotesPage,
    OutboxPage,
    MytaskPage,
    AddMembersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GroupProvider
  ]
})
export class AppModule {}
