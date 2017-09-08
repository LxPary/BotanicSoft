import { PlantServiceProvider } from './../../providers/plant-service/plant-service';
import { Diagnostic } from '@ionic-native/diagnostic';
import { GalleryPage } from './../gallery/gallery';
import { AddGalleryPage } from './../add-gallery/add-gallery';
import { AddPlantaPage } from './../add-planta/add-planta';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/merge'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PlantServiceProvider]
})
export class HomePage {
  public users: any;
  public loader: any;
  constructor(public navCtrl: NavController
    , private alertCtrl: AlertController
    , private diagnostic: Diagnostic
    , public camera: Camera
    , public ps:PlantServiceProvider
    , public loadingCtrl: LoadingController
  ) {
    this.users = [];
    this.loader = this.loadingCtrl.create();
  }
  ionViewDidLoad(){
    this.loader.present();
    this.ps.getUsers().subscribe(usersIDs => {
      let sources = usersIDs.map(userID => this.ps.getUserDetail(userID));
      Observable.merge(...sources).subscribe(
        data => this.users.push(data),
        error => console.log(error),
        () => this.loader.dismiss()
      );
    });
  }

  goToAdd() {
    this.checkPermissions();
  }
  goToAddGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.navCtrl.push(AddGalleryPage, { image: base64Image });
    }, (err) => {
      this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Imposible acceder a la galeria!',
        buttons: ['Aceptar']
      }).present();
    });
  }
  openGallery(Id) {
    this.navCtrl.push(GalleryPage, { pId: Id })
  } 

  checkPermissions() {
    this.diagnostic.isCameraAvailable().then((authorized) => {
      if (authorized) {
        this.diagnostic.isCameraAuthorized().then((authorized) => {
          if (authorized) {
            this.getPicture();
          }
          else {
            this.diagnostic.requestCameraAuthorization().then((status) => {
              if (status == this.diagnostic.permissionStatus.GRANTED)
                this.getPicture();
              else {
                this.alertCtrl.create({
                  title: 'Message',
                  subTitle: 'Imposible acceder a la camara!',
                  buttons: ['Aceptar']
                }).present();
              }
            });
          }
        });
      }
      else {
        this.diagnostic.requestCameraAuthorization().then((status) => {
          if (status == this.diagnostic.permissionStatus.GRANTED)
            this.getPicture();
          else {
            this.alertCtrl.create({
              title: 'Message',
              subTitle: 'Imposible acceder a la camara!',
              buttons: ['Aceptar']
            }).present();
          }
        });
      }
    }).catch(error => {
      this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Imposible acceder a la camara!',
        buttons: ['Aceptar']
      }).present();
    });
  }

  getPicture() {
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture(options)
      .then(imageData => {
        this.navCtrl.push(AddPlantaPage, { image: `data:image/jpeg;base64,${imageData}` });
      })
      .catch(error => {
        this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Imposible acceder a la camara!',
          buttons: ['Aceptar']
        }).present();
      });
  }

}


