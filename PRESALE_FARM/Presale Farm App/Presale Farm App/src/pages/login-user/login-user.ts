import { OnInit, Component } from "@angular/core";
import { NavController, NavParams, LoadingController } from "ionic-angular";
import { Md5 } from 'ts-md5/dist/md5';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

import { ValidateStartAppPage } from "../../pages/validate-start-app/validate-start-app";

import { LoginUserProvider } from "../../providers/login-user-provider";

@Component({
    selector: "page-login-user",
    templateUrl: "login-user.html"
})
export class LoginUserPage {

    loginForm: FormGroup;
    userInfo: { password: string, email: string } = { password: "", email: "" };


    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public formBuilder: FormBuilder
        , public loginSrv: LoginUserProvider
        , public loadingCtrl: LoadingController) { }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginUserPage");
    }

    ngOnInit(): any {
        this.loginForm = this.formBuilder.group({
            'password': ["", [Validators.required, Validators.minLength(3)]],
            'email': ["", [Validators.required, this.emailValidator.bind(this)]]
        });
    }

    onSubmit() {
        const loading = this.loadingCtrl.create({
            spinner: "dots"
            , content: "Iniciando Sesión, por favor, espere..."
        });
        loading.present();

        console.log(JSON.stringify(this.userInfo));
        this.loginSrv.loguinUser(
            Md5.hashStr(this.userInfo.email)
            , Md5.hashStr(this.userInfo.password))
            .then((data) => {
                localStorage.setItem("USER", JSON.parse(JSON.stringify(data)));

                this.navCtrl.push(ValidateStartAppPage
                    , { USER: JSON.parse(JSON.stringify(data))}
                    , { animate: true, animation: "md-transition", direction: "forward", duration: 1000 });
                loading.dismiss();
            })
            .catch((err) => {
                loading.dismiss();
                alert(err);
            });
    }

    emailValidator(control: FormControl): { [s: string]: boolean } {
        if (!(control.value.match("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"))) {
            return { invalidEmail: true };
        }
    }

}
