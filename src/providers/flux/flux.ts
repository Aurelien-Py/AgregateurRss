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
  }

  add(f: Flux){
    this.listFlux.push(f);
    this.save();
  }

  remove(id: number){
    for(let i = 0; i < this.listFlux.length; i++){
      if(this.listFlux[i].id === id){
        this.listFlux.splice(i,1);
        this.save();
        break;
      }
    }
  }

  save(){
    this.storage.set('Flux', JSON.stringify(this.listFlux));
  }

  clean(){
    this.storage.clear();
  }

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
