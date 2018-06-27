import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FluxProvider } from '../../providers/flux/flux';
import { ModalController, Modal  } from 'ionic-angular';
import { Flux } from '../../models/Flux/flux';


/**
 * Generated class for the FluxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flux',
  templateUrl: 'flux.html'
})
export class FluxComponent {

  @Input() flux: Flux;

  constructor(private fluxP : FluxProvider, private modal: ModalController) {
    console.log('Hello ListFluxComponent Component');
  }

  remove(id: string){
    this.fluxP.remove(id);
  }

  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingListFluxPage');
      modalAddFlux.present();
    }

}
