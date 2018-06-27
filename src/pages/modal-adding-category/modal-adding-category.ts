import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Category } from '../../models/Category/category';
import { CategoryProvider } from '../../providers/category/category';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalAddingCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-adding-category',
  templateUrl: 'modal-adding-category.html',
})
export class ModalAddingCategoryPage {


  nameCategory: string;
  colorCategory: string;

  constructor(public navCtrl: NavController,  private toastCtrl: ToastController, public navParams: NavParams, public category: CategoryProvider, public viewC: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddingCategoryPage');
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
createCategory(){
    this.category.add(new Category(this.nameCategory,this.colorCategory));
    this.closeModal();
    let toast = this.toastCtrl.create({
      message: 'Catégorie créée',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
