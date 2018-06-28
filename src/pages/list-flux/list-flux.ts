// YE_BA


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';

import { FluxProvider } from "../../providers/flux/flux";
import { Flux } from "../../models/Flux/flux";


import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the ListFluxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-flux',
  templateUrl: 'list-flux.html',
})
export class ListFluxPage {

  ListFlux: Array<Flux> ;
  subscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public FluxP: FluxProvider, private modal: ModalController) {
    this.ListFlux = Array<Flux>(0) ;
    this.FluxP.getAll().then(data =>{
      this.ListFlux = data ;
    },
    error => {
      console.log("Error while loading Flux List");
    } );

    this.subscription = this.FluxP.getListFlux().subscribe( data => {
      this.ListFlux = data;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFluxPage');
  }

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingFluxPage');
    modalAddFlux.present();
  }

}

// YE_EA