import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-category-list",
  templateUrl: "category-list.html",
})
export class CategoryListPage {
  Title: any;
  Description: any;
  Category: any;
  Status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Title = this.navParams.get("Title");
    this.Description = this.navParams.get("Description");
    this.Category = this.navParams.get("Category");
    this.Status = this.navParams.get("Status");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CategoryListPage");
  }

  gotoDashboard() {
    this.navCtrl.setRoot("DashboardPage", {
      Category: this.Category,
      From: "Category",
    });
  }
}
