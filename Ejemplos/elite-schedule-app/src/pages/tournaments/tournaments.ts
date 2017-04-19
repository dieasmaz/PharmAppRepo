import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import {MyTeamsPage, TeamsPage } from '../pages';
import {EliteApi} from '../../shared/shared'


@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {

  tournaments:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private eliteApi:EliteApi, private loadingController:LoadingController) {}


  ItemTapped($event,tourney){
    this.navCtrl.push(TeamsPage,tourney);
  }
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments',
      spinner:'dots'
    });

   loader.present().then(() => {
      this.eliteApi.getTorunaments().then(data => this.tournaments = data);
      loader.dismiss();
    })
    console.log("## lifecycle ## ionViewDidLoad")
  }

 ionViewWillEnter(){
   console.log("## lifecycle ## ionViewWillEnter")
 }
 
 ionViewDidEnter(){
   console.log("## lifecycle ## ionViewDidEnter")
 }

 ionViewWillLeave(){
   console.log("## lifecycle ## ionViewWillLeave")
 }

 ionViewDidLeave(){
   console.log("## lifecycle ## ionViewDidLeave")
 }

 ionViewWillUnload(){
   console.log("## lifecycle ## ionViewWillUnload")
 }

 ionViewDidUnload(){
   console.log("## lifecycle ## ionViewDidUnload")
 }


}
