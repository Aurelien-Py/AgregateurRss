// YE_BA


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { HttpClient,} from '@angular/common/http';
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

  public ListFlux: Array<Flux> ;
  public subscription: Subscription;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public FluxP: FluxProvider, 
              public http: HttpClient,
              private modal: ModalController, 
              ) {
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

/**
 *Fonction permettant l'ouverture d'un modal pour la création d'une nouvelle catégorie
 *
 * @memberof CategoriesPage
 */

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingFluxPage');
    modalAddFlux.present();
  }



  ngAfterViewInit(){
    this.doRefresh(null);
  }

  /**
   * Fonction permettant de recharger la page
   * 
   * @param refresher
   * @memberof BookmarksPage
   */

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