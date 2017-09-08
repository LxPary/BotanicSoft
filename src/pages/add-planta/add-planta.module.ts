import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlantaPage } from './add-planta';

@NgModule({
  declarations: [
    AddPlantaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlantaPage),
  ],
  exports: [
    AddPlantaPage
  ]
})
export class AddPlantaPageModule {}

