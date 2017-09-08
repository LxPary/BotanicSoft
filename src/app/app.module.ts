import { AddGroupPageModule } from './../pages/add-group/add-group.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera'
import { Diagnostic } from '@ionic-native/diagnostic';
import { AddPlantaPageModule } from "../pages/add-planta/add-planta.module";
import { AddGalleryPageModule } from './../pages/add-gallery/add-gallery.module';
import { GalleryPageModule } from './../pages/gallery/gallery.module';
import { GalleryDetailPageModule } from './../pages/gallery-detail/gallery-detail.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage   
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AddPlantaPageModule,
    AddGalleryPageModule,
    GalleryPageModule,
    GalleryDetailPageModule,
    AddGroupPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage
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
