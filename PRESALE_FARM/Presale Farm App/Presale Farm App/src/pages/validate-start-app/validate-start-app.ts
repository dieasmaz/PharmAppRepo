import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../pages/home/home";
import { Events } from 'ionic-angular';

@Component({
    selector: 'page-validate-start-app',
    templateUrl: 'validate-start-app.html'
})
export class ValidateStartAppPage {
    user: any;
    constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private events: Events ) {
        this.user = JSON.parse(this.navParams.get("USER"))[0];
    }

    ionViewDidLoad() {
        console.log(this.user);
    }

    goHomePage() {
        this.navCtrl.setRoot(HomePage, {},
            {
                animate: true, animation: "md-transition", direction: "forward", duration: 1000
            });
            this.events.publish("User", this.user);
    }
    goBack() {
        this.navCtrl.pop();
    }

}
