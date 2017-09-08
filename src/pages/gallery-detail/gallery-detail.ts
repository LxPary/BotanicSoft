import { PlantServiceProvider } from './../../providers/plant-service/plant-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GalleryDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gallery-detail',
  templateUrl: 'gallery-detail.html',
  providers: [PlantServiceProvider]
})
export class GalleryDetailPage {
  item: any;
  planta: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ps: PlantServiceProvider, public loadingCtrl: LoadingController) {
    this.item = this.navParams.get('Id');
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ps.getPlaylistSongs(this.item).subscribe(data => { this.planta = data.data[0];console.log(data.data); loader.dismiss(); });
  }
}
