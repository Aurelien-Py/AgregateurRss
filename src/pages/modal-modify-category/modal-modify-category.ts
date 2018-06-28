import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalModifyCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-modify-category',
  templateUrl: 'modal-modify-category.html',
})
export class ModalModifyCategoryPage {

  titleCategory: string;
  colorCategory: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public category: CategoryProvider, public viewC: ViewController, public navParams: NavParams) {
    let cat = navParams.get('category');
    this.titleCategory = cat.titleCategory;
    this.colorCategory = cat.colorCategory;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalModifyCategoryPage');
  }

  /**
 *Fonction permettant de fermer un modal ouvert
 *
 * @memberof ModalAddingCategoryPage
 */
closeModal(){
  this.viewC.dismiss(); 
}
/**
*Fonction permettant de créer une catégorie avec son nom et sa couleur
*
* @memberof ModalAddingCategoryPage
*/
modifyCategory(){
  //this.category.udpate(new Category(this.titleCategory,this.colorCategory));
  this.closeModal();
  let toast = this.toastCtrl.create({
    message: 'Catégorie modifiée',
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
}
