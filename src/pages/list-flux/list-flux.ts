// YE_BA


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FluxProvider } from "../../providers/flux/flux";
import { Flux } from "../../models/Flux/flux";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public FluxP: FluxProvider) {
    this.ListFlux = Array<Flux>(0) ;
    this.FluxP.getAll().then(data =>{
      this.ListFlux = data ;
    } );
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFluxPage');
  }

  

}

// YE_EA