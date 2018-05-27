import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { SignInPage } from '../pages/sign-in/sign-in';
const config={
  apiKey: "AIzaSyDLE8ta2WCd-1WgefJ9v1xzLiiAtkbOC0o",
  authDomain: "pronto-do-list.firebaseapp.com",
  databaseURL: "https://pronto-do-list.firebaseio.com",
  projectId: "pronto-do-list",
  storageBucket: "pronto-do-list.appspot.com",
  messagingSenderId: "88852037526"
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SignInPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      firebase.initializeApp(config);
    });
  }
}

