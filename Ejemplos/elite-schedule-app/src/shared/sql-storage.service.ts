import {Injectable}  from '@angular/core';
import {SQLite} from 'ionic-native';

@Injectable()
export class SqlStorage{
    public db:SQLite;

    
    constructor() {
        
    }

    getAll(){
        return this.db.executeSql('SELECT key , value FROM kv',[]).then(data=>{
            let results=[];
            console.dir(data);
                                    
            for(let i=0; i<data.rows.length;i++){
               results.push(JSON.parse(data.rows.item(i).value));     
            }
            return results;
        }).catch(ex=>{
            console.dir(ex);
        });
    }

    get(key:string){
        return this.db.executeSql('select key, value from kv where key=? limit 1',[key]).then(data=>{
            if (data.rows.length>0){
                return JSON.parse(data.rows.item(0).value);
            }
        }).catch(ex=>{
            console.dir(ex);
        });
    }

    remove(key:string){
        return this.db.executeSql('delete from kv where key=?',[key]);
    }

    set(key:string,value:string){
        return this.db.executeSql('insert or replace into kv(key,value) values(?,?)',[key,value]).then(data=>{
            if (data.rows.length>0){
                return JSON.parse(data.row.item(0).value);

            }
            console.dir(data);
        }).catch(ex=>{
            console.dir(ex);
        });
    }

 
    /**
     * Should be called after deviceready event is fired
     */
    initializeDatabase(){
        this.db = new SQLite();
        return this.db.openDatabase({name:'data.db',location:'default'}).then(
            (db)=>{
                return this.db.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key,value text)',[]).then(
                    data=>{
                        console.log('**after CREATE TABLE check',data);
                }).catch((ex)=>{
                        console.dir(ex);
                });
        }).catch(ex=>{
            console.dir(ex);
        });

    }

}