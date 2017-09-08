import { AddPlantaPage } from './../pages/add-planta/add-planta';
import { AddGalleryPage } from './../pages/add-gallery/add-gallery';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { AddGroupPage } from './../pages/add-group/add-group';
import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html',
})
export class MyApp { 
  @ViewChild('content') nav: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Crear Grupo', component: AddGroupPage, icon: 'people' },
      { titulo: 'Agregar de Galeria', component: AddGalleryPage, icon: 'image' },
      { titulo: 'Tomar Foto', component: AddPlantaPage, icon: 'camera' },
      { titulo: 'Contacto', component: ContactPage, icon: 'mail' },
      { titulo: 'Acerca de', component: AboutPage, icon: 'information-circle' }
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page) {
    console.log(page);
    this.nav.setRoot(page);
  }
}
