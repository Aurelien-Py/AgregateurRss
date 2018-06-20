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

  closeModal(){
    this.viewC.dismiss(); 
  }
  
  addFlux(){
    this.flux.add(new Flux(this.nameFlux,this.addressFlux, this.categoryFlux));
    this.closeModal();
    let toast = this.toastCtrl.create({
      message: 'Flux ajouté',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
