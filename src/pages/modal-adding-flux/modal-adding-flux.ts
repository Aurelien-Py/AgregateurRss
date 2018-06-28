import { Category } from './../../models/Category/category';
import { Component } from '@angular/core';
import { Flux } from '../../models/Flux/flux';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';
import { CategoryProvider } from '../../providers/category/category';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ModalAddingFluxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-adding-flux',
  templateUrl: 'modal-adding-flux.html',
})
export class ModalAddingFluxPage {


  nameFlux: string;
  addressFlux: string;
  categoryFlux: Category;
  listCategories: Array<Category>;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, public flux: FluxProvider,public viewC: ViewController, public category: CategoryProvider) {
    this.nameFlux = null;
    this.addressFlux = null;
    this.categoryFlux = null;
    this.category.getAll().then(
      data => {
        this.listCategories = data;
      },
      error => {
        console.log("Error while loading categories");
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddingFluxPage');
  }

  /**
   *Fonction permettant de fermer un modal ouvert
   *
   * @memberof ModalAddingFluxPage
   */
  closeModal(){
    this.viewC.dismiss(); 
  }

/**
 *Fonction permettant de vérifier les paramètres de création du flux
 *
 * @memberof ModalAddingFluxPage
 */
controlFlux(){
  var regexUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (!(this.nameFlux == null || this.categoryFlux == null || this.addressFlux == null || !regexUrl.test(this.addressFlux))){
    this.addFlux();
  }
  else{
    let toast = this.toastCtrl.create({
      message: 'Erreur dans la saisie des paramètres',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  
}

  /**
   *Fonction permettant d'ajouter un flux avec son nom, son adresse et sa catégorie
   *
   * @memberof ModalAddingFluxPage
   */
  addFlux(){
    let f:Flux = new Flux(this.nameFlux,this.addressFlux, this.categoryFlux);
    if(!this.flux.alreadyExist(f)){
      this.flux.add(f);
      this.closeModal();
      let toast = this.toastCtrl.create({
        message: 'Flux ajouté',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'Flux déjà existant',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

}
