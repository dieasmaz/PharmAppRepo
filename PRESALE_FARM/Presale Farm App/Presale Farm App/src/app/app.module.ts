import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

//Modules and Pages
import { LoginUserPage } from "../pages/login-user/login-user";
import { HomePage } from "../pages/home/home";
import { ValidateStartAppPage } from "../pages/validate-start-app/validate-start-app";
import { InventoryInformationPage } from "../pages/inventory-information/inventory-information";

//Providers
import { HTTP } from "@ionic-native/http";
import { LoginUserProvider } from "../providers/login-user-provider";
import { ProductProvider } from "../providers/product-provider";
import { ValidateStartProvider } from "../providers/validate-start-provider";
import { ConfigurationOptionsProvider } from "../providers/configuration-options-provider";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginUserPage,
        ValidateStartAppPage,
        InventoryInformationPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginUserPage,
        ValidateStartAppPage,
        InventoryInformationPage
    ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }
        , HTTP
        , ProductProvider
        , LoginUserProvider
        , ValidateStartProvider
        , ConfigurationOptionsProvider]
})
export class AppModule { }
