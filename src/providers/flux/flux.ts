import { Flux } from './../../models/Flux/flux';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FluxProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FluxProvider {

  public listFlux = Array<Flux>(0);

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello FluxProvider Provider');
    this.storage.get('Flux').then(
      data => {
        console.log(data);
        this.listFlux = JSON.parse(data) || Array<Flux>(0);
      },
      error => {
        console.log('Erreur Flux Constructor');
      }
    );
  }

  /**
   *Fonction permettant d'ajouter un flux
   *
   * @param {Flux} f
   * @memberof FluxProvider
   */
  add(f: Flux){
    this.listFlux.push(f);
    this.save();
  }

  /**
   *Fonction permettant de supprimer un flux
   *
   * @param {number} id
   * @memberof FluxProvider
   */
  remove(id: number){
    for(let i = 0; i < this.listFlux.length; i++){
      if(this.listFlux[i].id === id){
        this.listFlux.splice(i,1);
        this.save();
        break;
      }
    }
  }

  /**
   *Fontion enregistrant en base mémoire téléphone les flux
   *
   * @memberof FluxProvider
   */
  save(){
    this.storage.set('Flux', JSON.stringify(this.listFlux));
  }

  /**
   *Fonction vidant en base mémoire téléphone les flux
   *
   * @memberof FluxProvider
   */
  clean(){
    this.storage.clear();
  }

  /**
   *Fonction retournant la liste des flux enregistrés
   *
   * @returns Promise<Array<Flux>>
   * @memberof FluxProvider
   */
  getAll(){
    console.log('ici');
    return new Promise<Array<Flux>>((resolve, reject) => {
      this.storage.get('Flux').then(
        data => {
          console.log(data);
          resolve(JSON.parse(data));
        },
        error => {
          reject(error);
        }
      )
    });
  }

  /**
   *Fonction retournant un flux selon son id
   *
   * @param {number} id
   * @returns Flux
   * @memberof FluxProvider
   */
  getById(id: number){
    let res: Flux = null;

    for(let i = 0; i < this.listFlux.length; i++){
      if(this.listFlux[i].id === id){
        res = this.listFlux[i];
        break;
      }
    }

    return res;
  }

}
