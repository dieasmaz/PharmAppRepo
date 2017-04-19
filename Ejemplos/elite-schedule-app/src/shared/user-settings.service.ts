import {Injectable}  from '@angular/core';
import {Events} from 'ionic-angular'
import { Storage} from '@ionic/storage';
import {SQLite} from 'ionic-native';
import {SqlStorage} from './shared';

import _ from 'lodash';
const win: any = window;

@Injectable()
export class UserSettings{
    storage = new Storage();
    public db: SQLite;
    public sql: SqlStorage;
    constructor(private events:Events) {
        if (win.sqlitePlugin){
            this.sql=  new SqlStorage();
        }else{
            console.warn('SQLite plugin not installed, falling back to regular Ionic Storage');
        }
    }

    favoriteTeam(team,tournamentId,tournamentName){
        let item = {
            team:team,
            tournamentId:tournamentId,
            tournamentName:tournamentName
        };

        if (this.sql){
            this.sql.set(team.id.toString(),JSON.stringify(item)).then(data=>{
                this.events.publish('favorites:changed');
            })
        }else {
            this.storage.set(team.id.toString(), JSON.stringify(item)).then(value=>this.events.publish('favorites:changed'));
        }
    }

    unfavoriteTeam(team){
        if (this.sql){
            this.sql.remove(team.id.toString()).then(data=>{
                this.events.publish('favorites:changed');
            });
        }else {
            this.storage.remove(team.id.toString())
                .then(value=> this.events.publish('favorites:changed'));
        }
    }

    isFavoriteTeam(teamId){
        if (this.sql){
          return  this.sql.get(teamId.toString()).then(value=>value?true:false);
        }else{
            return this.storage.get(teamId.toString()).then(value=>value?true:false);
        }

    }

    getAllFavorites(){   
        if (this.sql){
            return this.sql.getAll();
        }else{
           return new Promise(resolve => {
                let results = [];
                this.storage.forEach(data => {
                    results.push(JSON.parse(data));
                });
                return resolve(results);
            });
        }
    }

    initStorage(){
         if (this.sql){
            return this.sql.initializeDatabase();
        } else {
            return new Promise(resolve => resolve());
        }
    }
} 