import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationOptionsProvider {

    constructor() {

    }
    //url = {
    //    loguin: "http://10.87.110.160:8596/loguin",
    //    product: "http://10.87.110.160:8596/product"
    //};
    url = {
        loguin: "http://192.168.43.165:8596/loguin",
        product: "http://192.168.43.165:8596/product"
    };
}
