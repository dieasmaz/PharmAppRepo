import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginUserPage } from "../pages/login-user/login-user";
import { HomePage } from "../pages/home/home";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

        let user = localStorage.getItem("USER");
        if (user !== null && user !== undefined && user !== "") {
            this.rootPage = HomePage;
        } else {
            this.rootPage = LoginUserPage;
        }

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
