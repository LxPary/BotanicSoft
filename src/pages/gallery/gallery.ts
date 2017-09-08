import { GalleryDetailPage } from './../gallery-detail/gallery-detail';
import { PlantServiceProvider } from './../../providers/plant-service/plant-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
  providers: [PlantServiceProvider]
})
export class GalleryPage {
  Id: any;
  grid: Array<Array<string>>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public ps: PlantServiceProvider) {
    this.Id = this.navParams.get('pId');
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    let rowNum = 0;
    this.ps.getUserPlaylists(this.Id.id).subscribe(data => {
      let result = data.data;
      this.grid = Array(Math.ceil(result.length / 2));
      for (let i = 0; i < result.length; i += 2) {
        this.grid[rowNum] = Array(2);
        if (result[i]) {
          this.grid[rowNum][0] = result[i]
        }
        if (result[i + 1]) {
          this.grid[rowNum][1] = result[i + 1]
        }
        rowNum++;
      }
      loader.dismiss();
    });
  }

  openDetails(pId) {
    this.navCtrl.push(GalleryDetailPage, { Id: pId })
  }
}
