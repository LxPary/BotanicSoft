import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlantDetailsPage } from './plant-details';

@NgModule({
  declarations: [
    PlantDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlantDetailsPage),
  ],
  exports: [
    PlantDetailsPage
  ]
})
export class PlantDetailsPageModule {}
