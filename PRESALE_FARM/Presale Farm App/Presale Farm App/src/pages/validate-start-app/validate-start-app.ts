import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../pages/home/home";

@Component({
    selector: 'page-validate-start-app',
    templateUrl: 'validate-start-app.html'
})
export class ValidateStartAppPage {
    user: any;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user = JSON.parse(this.navParams.get("USER"))[0];
    }

    ionViewDidLoad() {
        console.log(this.user);
    }

    goHomePage() {
        this.navCtrl.push(HomePage, {},
            {
                animate: true, animation: "md-transition", direction: "forward", duration: 1000
            });
        this.navCtrl.remove(0, 1);
    }
    goBack() {
        this.navCtrl.pop();
    }

}
