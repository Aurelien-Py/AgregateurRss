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

  public id: number;
  public name: string;
  public link: string;
  public dateCreation: Date;
  static latestId: number = 1;

  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }

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

  get(){

  }

  set(){

  }

}
