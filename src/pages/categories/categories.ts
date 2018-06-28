import { Component } from '@angular/core';
import { CategoryProvider } from './../../providers/category/category';
import { IonicPage, NavController, NavParams, ModalController, Modal  } from 'ionic-angular';
import { Category } from '../../models/Category/category';
import { Subscription } from 'rxjs/Subscription';


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
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController,  public categoryP: CategoryProvider) {
    
  }

  
ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
    this.categories = Array<Category>(0);
    console.log(this.categories);
    this.categoryP.getAll().then(data => {
      this.categories = data;
      console.log(data);
    });

    this.subscription = this.categoryP.getListCategory().subscribe( data => {
      this.categories = data;
      console.log(data);
    });
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

}
