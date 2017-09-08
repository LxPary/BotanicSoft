import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddGalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-gallery',
  templateUrl: 'add-gallery.html',
})
export class AddGalleryPage {
  image: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = navParams.get('image');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGalleryPage');
  }

}
