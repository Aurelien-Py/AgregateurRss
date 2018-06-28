import { Observable, Subject } from 'rxjs/Rx';
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
  private subject = new Subject<Array<Flux>>();

  /**
  * Creates an instance of FluxProvider.
  * 
  * @param {HttpClient} http
  * @param {Storage} storage
  * @memberof FluxProvider
  */
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

  update() {
    this.subject.next(this.listFlux);
  }

  getListFlux(): Observable<Array<Flux>> {
      return this.subject.asObservable();
  }

  /**
   * Fonction qui sert a ajouter un flux a l'environnement
   *
   * @param {Flux} f
   * @returns {boolean} : indique son succes
   * @memberof FluxProvider
   */
  add(f: Flux){
    let res: boolean = false;
    if(!this.alreadyExist(f)){
      this.listFlux.push(f);
      this.save();
      res = true;
    }
    return res;
  }


  /**
   * Fonction qui sert a supprimer un flux de l'environnement
   *
   * @param {string} id
   * @memberof FluxProvider
   */
  remove(id: string){
    for(let i = 0; i < this.listFlux.length; i++){
      if(this.listFlux[i].id === id){
        this.listFlux.splice(i,1);
        this.save();
        break;
      }
    }
  }

  /**
   *  Fonction qui sauvegarde la liste des flux dans la base du smartphone
   *
   * @memberof FluxProvider
   */
  save(){
    this.storage.set('Flux', JSON.stringify(this.listFlux));
    this.update();
  }


  /**
   *  Fonction qui supprime tous les elements Flux de la base
   *
   * @memberof FluxProvider
   */
  clean(){
    this.storage.remove('Flux');
  }

  /**
   *  Fonction retournant la liste des flux enregistrés
   *
   * @returns {Promise<Array<Flux>>}
   * @memberof FluxProvider
   */
  getAll(){
    return new Promise<Array<Flux>>((resolve, reject) => {
      this.storage.get('Flux').then(
        data => {
          let temp = JSON.parse(data) || Array<Flux>(0);
          resolve(temp);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  /**
   *  Fonction qui verifie si un flux existe deja ou non
   *
   * @param {Flux} f
   * @returns {boolean}
   * @memberof FluxProvider
   */
  alreadyExist(f: Flux){
    let res: boolean = false;

    for(let i = 0; i < this.listFlux.length; i++){
      if(this.listFlux[i].title === f.title || this.listFlux[i].link === f.link){
        res = true;
        break;
      }
    }

    return res;
  }

  /**
   *  Fonction qui retourne a Flux a l'aide de son id
   *
   * @param {string} id
   * @returns {Flux}
   * @memberof FluxProvider
   */
  getById(id: string){
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
