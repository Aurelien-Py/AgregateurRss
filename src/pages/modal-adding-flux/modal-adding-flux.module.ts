import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAddingFluxPage } from './modal-adding-flux';

@NgModule({
  declarations: [
    ModalAddingFluxPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAddingFluxPage),
  ],
})
export class ModalAddingFluxPageModule {}
