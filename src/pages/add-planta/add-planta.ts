import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AddPlantaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-planta',
  templateUrl: 'add-planta.html',
})
export class AddPlantaPage {
  image: string = null;
  constructor(
    public navCtrl: NavController,   
    public navParams: NavParams  ) {
      this.image = navParams.get('image');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlantaPage');
  }
 
}
