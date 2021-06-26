import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
} from "ionic-angular";
import { categoryData } from "./CategoryData";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html",
})
export class DashboardPage {
  show: boolean = false;
  title: any = "";
  description: any = "";
  category: any = "";
  status: any = "";
  categoryData: any = [];
  toastMsg: any;
  inputType: any;
  From: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastctrl: ToastController
  ) {
    this.categoryData = categoryData.CategoryList;
    console.log("categoryData " + JSON.stringify(this.categoryData));
    this.inputType = categoryData.FieldTypeJson.type;
    console.log("inputType " + JSON.stringify(this.inputType));
    this.From = this.navParams.get("From");
    if (this.From == "Category") {
      this.category = this.navParams.get("Category");
      this.show = this.navParams.get("show");
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }

  addCategory() {
    if (this.show == false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  IonChangeCategory(event, data) {
    this.category = data.CategoryName;
    console.log("category " + JSON.stringify(this.category));
  }

  saveCategory() {
    if (this.title == "") {
      this.toastMsg = "Please Enter Title";
      this.PresentToast();
    } else if (this.description == "") {
      this.toastMsg = "Please Enter Description";
      this.PresentToast();
    } else if (this.category == "") {
      this.toastMsg = "Please Select Category";
      this.PresentToast();
    } else if (this.status == "") {
      this.toastMsg = "Please Enter Status";
      this.PresentToast();
    } else {
      console.log("Go to Category list ");
      this.navCtrl.setRoot("CategoryListPage", {
        Title: this.title,
        Description: this.description,
        Category: this.category,
        Status: this.status,
        From: "Dashboard",
      });
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
