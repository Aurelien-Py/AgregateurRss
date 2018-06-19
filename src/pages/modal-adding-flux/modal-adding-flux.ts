import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewC: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddingFluxPage');
  }

  closeModal(){
    this.viewC.dismiss(); 
  }
  
}
