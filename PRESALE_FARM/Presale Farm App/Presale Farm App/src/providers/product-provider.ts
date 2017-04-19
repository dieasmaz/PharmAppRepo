import { Injectable } from "@angular/core";
import { HTTP } from "@ionic-native/http";
import { ConfigurationOptionsProvider } from "../providers/configuration-options-provider";

@Injectable()
export class ProductProvider {

    constructor(public http: HTTP, private configOpts: ConfigurationOptionsProvider) {

    }

    getProducts() {
        return new Promise((resolve, reject) => {
            this.http.get(this.configOpts.url.product, {}, {})
                .then(data => {
                    resolve(data.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}
