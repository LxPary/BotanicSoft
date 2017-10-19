import { AyudaPage } from './../pages/ayuda/ayuda';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { RegistrosPage } from './../pages/registros/registros';
import { AjustesPage } from './../pages/ajustes/ajustes';
import { PerfilPage } from './../pages/perfil/perfil';
import { AddPlantaPage } from './../pages/add-planta/add-planta';
import { AddGalleryPage } from './../pages/add-gallery/add-gallery';
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
  public helpers: Array<{ titulo: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = HomePage;
    this.pages = [
      { titulo: 'Inicio', component: HomePage, icon: 'home' },
      { titulo: 'Mi Perfil', component: PerfilPage, icon: 'contacts' },
      { titulo: 'Ajustes', component: AjustesPage, icon: 'construct' },
      { titulo: 'Mis Registros', component: RegistrosPage, icon: 'list-box' },
      { titulo: 'Identificar', component: AddPlantaPage, icon: 'camera' }
    ];
    this.helpers = [
      { titulo: 'Tutorial', component: TutorialPage, icon: 'videocam' },
      { titulo: 'Ayuda', component: AyudaPage, icon: 'information' },
      { titulo: 'Creditos', component: AboutPage, icon: 'git-network' }     
    ];
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage(page) {
    this.nav.setRoot(page);
  }  
}
