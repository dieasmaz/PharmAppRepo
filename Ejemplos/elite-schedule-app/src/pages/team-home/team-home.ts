import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MyTeamsPage,StandingsPage,TeamDetailPage} from '../pages'
@Component({ 
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team= navParams.data;
  }
  public team: any;
  public teamDetailTab = TeamDetailPage;
  public standingsTab = StandingsPage;
  
  goHome(){
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

}
