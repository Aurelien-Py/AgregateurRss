import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal  } from 'ionic-angular';


/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingCategoryPage');
    modalAddFlux.present();
  }
}
