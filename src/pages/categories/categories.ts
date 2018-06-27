import { Component } from '@angular/core';
import { CategoryProvider } from './../../providers/category/category';
import { IonicPage, NavController, NavParams, ModalController, Modal  } from 'ionic-angular';
import { Category } from '../../models/Category/category';


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

  categories: Array<Category>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController,  public categoryP: CategoryProvider) {
    this.categories = Array<Category>(0);
    console.log(this.categories);
    this.categoryP.getAll().then(data => {
      this.categories = data;
    })
  }

  
ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

/**
 *Fonction permettant l'ouverture d'un modal pour la création d'une nouvelle catégorie
 *
 * @memberof CategoriesPage
 */
openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingCategoryPage');
    modalAddFlux.present();
  }
  
/**
 *Fonction permettant d'accéder à la page de la catégorie
 *
 * @param {Category} category
 * @memberof CategoriesPage
 */
goToCategoryPage(category: Category){
    this.navCtrl.push(CategoriesPage, {'category' : category});
  }

}
