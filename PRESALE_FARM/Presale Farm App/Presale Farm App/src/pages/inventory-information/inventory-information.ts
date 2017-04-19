import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from "../../providers/product-provider";

@Component({
  selector: 'page-inventory-information',
  templateUrl: 'inventory-information.html'
})
export class InventoryInformationPage {

    products: any;

    constructor(public navCtrl: NavController, private productPvdr: ProductProvider) {

    }


  ionViewDidLoad() {
      this.getProductsByHome();
  }

  getProductsByHome() {
      this.productPvdr.getProducts()
          .then((data) => {
              this.products = JSON.parse(JSON.stringify(data));
              this.products = JSON.parse(this.products);
          })
          .catch((err) => {
              alert(err);
          });
  }

}
