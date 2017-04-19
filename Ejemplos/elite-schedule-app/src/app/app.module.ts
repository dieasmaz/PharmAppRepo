import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import {MyTeamsPage, TournamentsPage,TeamsPage,TeamDetailPage,TeamHomePage,StandingsPage,GamePage,MapPage} from '../pages/pages';
import { AgmCoreModule } from 'angular2-google-maps/core'
 

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage, TournamentsPage,TeamsPage,TeamDetailPage,GamePage,TeamHomePage,StandingsPage,MapPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage, TournamentsPage,TeamsPage,TeamDetailPage,GamePage,TeamHomePage,StandingsPage,MapPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
