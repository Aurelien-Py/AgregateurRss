import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Flux } from '../../models/Flux/flux';

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

  add(){

  }

  remove(){

  }

  save(){

  }

  getAll(){

  }

  getById(){

  }

}
