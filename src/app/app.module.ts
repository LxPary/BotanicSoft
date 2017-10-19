import { AyudaPage } from './../pages/ayuda/ayuda';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { RegistrosPage } from './../pages/registros/registros';
import { AjustesPage } from './../pages/ajustes/ajustes';
import { PerfilPage } from './../pages/perfil/perfil';
import { PlantUsuarioPageModule } from './../pages/plant-usuario/plant-usuario.module';
import { PlantDetailsPageModule } from './../pages/plant-details/plant-details.module';
import { AddGroupPageModule } from './../pages/add-group/add-group.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera'
import { Diagnostic } from '@ionic-native/diagnostic';
import { AddPlantaPageModule } from "../pages/add-planta/add-planta.module";
import { AddGalleryPageModule } from './../pages/add-gallery/add-gallery.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    PerfilPage,
    AjustesPage,
    RegistrosPage,
    TutorialPage,
    AyudaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AddPlantaPageModule,
    AddGalleryPageModule,
    PlantDetailsPageModule,
    PlantUsuarioPageModule,
    AddGroupPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    PerfilPage,
    AjustesPage,
    RegistrosPage,
    TutorialPage,
    AyudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    Diagnostic
  ]
})
export class AppModule { }
