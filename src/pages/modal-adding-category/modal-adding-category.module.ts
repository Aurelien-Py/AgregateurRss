import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAddingCategoryPage } from './modal-adding-category';

@NgModule({
  declarations: [
    ModalAddingCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAddingCategoryPage),
  ],
})
export class ModalAddingCategoryPageModule {}
