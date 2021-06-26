import { Component } from "@angular/core";
import {
  IonicPage,
  MenuController,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { loginData } from "./data";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
})
export class LoginPage {
  username: any = "";
  password: any = "";
  loginData: any;
  toastMsg: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastctrl: ToastController,
    public menuCtrl: MenuController
  ) {
    // this.menuCtrl.open();
    this.loginData = loginData.data;
    console.log("GetLoinData " + JSON.stringify(this.loginData));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  loginMethod() {
    if (this.username == this.loginData.UserName) {
      if (this.password == this.loginData.Password) {
        this.navCtrl.setRoot("DashboardPage");
      } else {
        this.toastMsg = "Please Enter Valid Password";
        this.PresentToast();
      }
    } else {
      this.toastMsg = "Please Enter Valid UserName";
      this.PresentToast();
    }
  }

  PresentToast() {
    let toast = this.toastctrl.create({
      message: this.toastMsg,
      duration: 3000,
      position: "bottom",
    });
    toast.onDidDismiss(() => {});
    toast.present();
  }
}
