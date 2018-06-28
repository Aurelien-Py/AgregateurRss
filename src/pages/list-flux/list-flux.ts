// YE_BA


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';

import { FluxProvider } from "../../providers/flux/flux";
import { Flux } from "../../models/Flux/flux";

import { ChangeDetectorRef } from '@angular/core'; 


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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public FluxP: FluxProvider, 
              private modal: ModalController, 
              public cd: ChangeDetectorRef) {
    this.ListFlux = Array<Flux>(0) ;
    this.FluxP.getAll().then(data =>{
      this.ListFlux = data ;
    },
    error => {
      console.log("Error while loading Flux List");
    } );

    //refresh the page after a change
    //this.cd.detectChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFluxPage');
  }

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingFluxPage');
    modalAddFlux.present();
  }

  ngAfterViewInit(){
    this.doRefresh(null);
  }

  doRefresh(refresher){
    this.ListFlux = Array<Flux>(0);
    this.FluxP.getAll().then(
      data => {
        console.log(data);
        this.ListFlux = data;
        if(refresher !== null){
          refresher.complete();
        }
      },
      error => {

      }
    )    
  }

}

// YE_EA