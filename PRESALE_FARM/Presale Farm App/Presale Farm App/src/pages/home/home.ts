import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Events } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  
  user: any;

  constructor(public navCtrl: NavController
  , public events: Events) {
    
  }

  ionViewWillEnter(){
    this.events.subscribe("User", (user)=>{
      this.user = user;
    })
  }

  ionViewDidLoad() {
    
  }
  
  
}