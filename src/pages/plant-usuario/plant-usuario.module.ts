import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlantUsuarioPage } from './plant-usuario';

@NgModule({
  declarations: [
    PlantUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(PlantUsuarioPage),
  ],
  exports: [
    PlantUsuarioPage
  ]
})
export class PlantUsuarioPageModule {}
