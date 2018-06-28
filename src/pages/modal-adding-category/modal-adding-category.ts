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


  titleCategory: string;
  colorCategory: string;

  constructor(public navCtrl: NavController,  private toastCtrl: ToastController, public navParams: NavParams, public category: CategoryProvider, public viewC: ViewController) {
    this.titleCategory = "";
    this.colorCategory = "#000000";
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
 *Fonction permettant de contrôler le nom renseigné à la création d'une catégorie
 *
 * @memberof ModalAddingCategoryPage
 */
  controlCategory(){
    if (!(this.titleCategory === "")){
      this.createCategory();
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Catégorie sans nom',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    
  }



/**
 *Fonction permettant de créer une catégorie avec son nom et sa couleur
 *
 * @memberof ModalAddingCategoryPage
 */
  createCategory(){
      let cat:Category = new Category(this.titleCategory,this.colorCategory.replace('#',''));
      if(!this.category.alreadyExist(cat)){
        this.category.add(cat);
        this.closeModal();
        let toast = this.toastCtrl.create({
          message: 'Catégorie créée',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
      else{
        let toast = this.toastCtrl.create({
        message: 'Catégorie déjà existante',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }    
  }
}

