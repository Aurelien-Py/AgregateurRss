import { Component } from '@angular/core';
import { Flux } from '../../models/Flux/flux';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';

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
  //categoryFlux: Category;

  constructor(public navCtrl: NavController, public navParams: NavParams, public flux: FluxProvider,public viewC: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddingFluxPage');
  }

  closeModal(){
    this.viewC.dismiss(); 
  }
  
  addFlux(){
    //this.flux.add(new Flux(this.nameFlux,this.addressFlux);
  }

}
