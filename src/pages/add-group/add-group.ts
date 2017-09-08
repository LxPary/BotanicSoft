import { Diagnostic } from '@ionic-native/diagnostic';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the AddGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-group',
  templateUrl: 'add-group.html',
})
export class AddGroupPage {
  image: string = null;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public platform: Platform
    , private alertCtrl: AlertController
    , private diagnostic: Diagnostic
    , public actionsheetCtrl: ActionSheetController
    , public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGroupPage');
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Seleccione',
      cssClass: 'page-add-group',
      buttons: [
        {
          text: 'Camara',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.getCamera();
          }
        },
        {
          text: 'Galeria',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getGallery();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  getGallery() {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;
    }, (err) => {
      this.alertCtrl.create({
        title: 'Message',
        subTitle: 'Imposible acceder a la galeria!',
        buttons: ['Aceptar']
      }).present();
    });
  }
  getCamera() {
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
        this.image = `data:image/jpeg;base64,${imageData}`;
      })
      .catch(error => {
        this.alertCtrl.create({
          title: 'Message',
          subTitle: 'Imposible acceder a la camara!',
          buttons: ['Aceptar']
        }).present();
      });
  }

  saveGroup() {
console.log("save");
  }
}
