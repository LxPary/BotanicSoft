import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GalleryDetailPage } from './gallery-detail';

@NgModule({
  declarations: [
    GalleryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GalleryDetailPage),
  ],
  exports: [
    GalleryDetailPage
  ]
})
export class GalleryDetailPageModule {}
