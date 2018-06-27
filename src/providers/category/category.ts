import { Category } from './../../models/Category/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  public listCategory = Array<Category>(0);

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello CategoryProvider Provider');
    this.storage.get('Category').then(
      data => {
        console.log(data);
        this.listCategory = JSON.parse(data) || Array<Category>(0);
      },
      error => {
        console.log('Erreur Category Constructor');
      }
    );
  }

  add(c: Category){
    let res: boolean = false;
    if(!this.alreadyExist(c)){
      this.listCategory.push(c);
      this.save();
      res = true;
    }
    return res;
  }

  remove(id: number){
    for(let i = 0; i < this.listCategory.length; i++){
      if(this.listCategory[i].id === id){
        this.listCategory.splice(i,1);
        this.save();
        break;
      }
    }
  }

  save(){
    this.storage.set('Category', JSON.stringify(this.listCategory));
  }

  clean(){
    this.storage.clear();
  }

  getAll(){
    console.log('ici');
    return new Promise<Array<Category>>((resolve, reject) => {
      this.storage.get('Category').then(
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
    let res: Category = null;

    for(let i = 0; i < this.listCategory.length; i++){
      if(this.listCategory[i].id === id){
        res = this.listCategory[i];
        break;
      }
    }

    return res;
  }

  getByTitle(title: string){
    let res: Category = null;

    for(let i = 0; i < this.listCategory.length; i++){
      if(this.listCategory[i].title === title){
        res = this.listCategory[i];
        break;
      }
    }

    return res;
  }

  alreadyExist(c: Category){
    return this.getByTitle(c.title) !== null;
  }


}
