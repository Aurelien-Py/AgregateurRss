import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalModifyCategoryPage } from './modal-modify-category';

@NgModule({
  declarations: [
    ModalModifyCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalModifyCategoryPage),
  ],
})
export class ModalModifyCategoryPageModule {}
