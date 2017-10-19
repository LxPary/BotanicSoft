import { PlantServiceProvider } from './../../providers/plant-service/plant-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the PlantDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-plant-details',
  templateUrl: 'plant-details.html',
  providers:[PlantServiceProvider]
})
export class PlantDetailsPage {

  item: any;
  planta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ps: PlantServiceProvider, public loadingCtrl: LoadingController) {
    this.item = this.navParams.get('Id');
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ps.getPlant(this.item).subscribe(data => {
      this.planta = data;
      loader.dismiss();
    },
      error => console.log(error)
    );
  }

}
