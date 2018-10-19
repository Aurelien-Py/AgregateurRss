import { Category } from './../../models/Category/category';
import { Component } from '@angular/core';
import { Flux } from '../../models/Flux/flux';
import { IonicPage, NavController, NavParams, ViewController,ModalController, Modal } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';
import { CategoryProvider } from '../../providers/category/category';
import { ToastController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';


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
  subscription: Subscription;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController,private modal: ModalController, public navParams: NavParams, public flux: FluxProvider,public viewC: ViewController, public category: CategoryProvider) {
    this.nameFlux = null;
    this.addressFlux = null;
    this.categoryFlux = null;
    this.listCategories = Array<Category>(0);
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
  ngAfterViewInit(){
    this.doRefresh(null);
  }

  ionViewDidEnter(){
    this.doRefresh(null);
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
  else if( this.categoryFlux == null){
    let toast = this.toastCtrl.create({
      message: 'Vous devez créer et choisir une catégorie pour ajouter un flux',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  else if (this.nameFlux == null|| this.addressFlux == null || !regexUrl.test(this.addressFlux)) {
    let toast = this.toastCtrl.create({
      message: 'Erreur de saisis dans les paramètres',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'Ok'
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

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingCategoryPage');
    modalAddFlux.present();
  }

 doRefresh(refresher){
  this.listCategories = Array<Category>(0);
  this.category.getAll().then(
    data => {
    console.log(data);
    this.listCategories = data;
    if(refresher !== null){
      refresher.complete();
    }
  },
  error=>{
    
  }
  )
 }


}
