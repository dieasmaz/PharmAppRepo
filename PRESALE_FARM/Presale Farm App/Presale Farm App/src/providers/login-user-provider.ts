import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { ConfigurationOptionsProvider } from "../providers/configuration-options-provider";

@Injectable()
export class LoginUserProvider {
    
    constructor(public http: HTTP, private configOpts: ConfigurationOptionsProvider) {
        
  }

  loguinUser(user: any, password: any) {
      const userOb = {
          "user": user
          ,"password": password
      };
      return new Promise((resolve, reject) => {
          this.http.get(this.configOpts.url.loguin, {},userOb)
              .then(data => {
                  resolve(data.data);
              })
              .catch( err => {
                  let operacion = {
                      code: err.status
                      , message: err.statusText
                      , type: err.type
                  };
                  reject(operacion);
                  operacion = null;
              });
      });
    }


}
