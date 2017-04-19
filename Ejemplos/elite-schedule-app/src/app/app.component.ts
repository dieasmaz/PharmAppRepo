import { Component, ViewChild } from '@angular/core';
import {Events, LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


import {MyTeamsPage,TournamentsPage,TeamHomePage } from '../pages/pages';
import {EliteApi, UserSettings} from '../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers:[
    EliteApi,
    UserSettings
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams:any[];

  rootPage: any;


  constructor(
    public events: Events,
    public loadingController: LoadingController,
    public platform: Platform,
    public eliteApi: EliteApi,
    private userSettings:UserSettings
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   

  }

  refreshFavorites(){
    this.userSettings.getAllFavorites().then(favs => 
      {
        this.favoriteTeams=<any[]>favs;  
      }
    );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.userSettings.initStorage().then(()=>{
        this.rootPage = MyTeamsPage;
        this.refreshFavorites();
        this.events.subscribe('favorites:changed',()=>this.refreshFavorites());
      });
     
    });
  }

  goHome(){
    this.nav.push(MyTeamsPage);
  }

  goToTournaments(){
    this.nav.push(TournamentsPage);
  }
  goToTeam(favorite){
    let loader = this.loadingController.create({
      content:'Getting data...',
      dismissOnPageChange:true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l=>this.nav.push(TeamHomePage));
  }
}
