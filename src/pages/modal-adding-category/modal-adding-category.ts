import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Category } from '../../models/Category/category';
import { CategoryProvider } from '../../providers/category/category';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public category: CategoryProvider, public viewC: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddingCategoryPage');
  }

  closeModal(){
    this.viewC.dismiss(); 
  }

  createCategory(){
    this.category.add(new Category(this.nameCategory,this.colorCategory));
    this.closeModal();
  }
}
