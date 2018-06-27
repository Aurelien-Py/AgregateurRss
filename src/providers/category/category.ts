import { Observable, Subject } from 'rxjs/Rx';
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
  private subject = new Subject<Array<Category>>();

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

  update() {
    this.subject.next(this.listCategory);
  }

  getListCategory(): Observable<Array<Category>> {
      return this.subject.asObservable();
  }

  /**
   *Fonction permettant d'ajouter une catégorie à la liste des favoris
   *
   * @param {Category} c
   * @memberof CategoryProvider
  */
  add(c: Category){
    let res: boolean = false;
    if(!this.alreadyExist(c)){
      this.listCategory.push(c);
      this.save();
      res = true;
    }
    return res;
  }

  /**
   *Fonction permettant de supprimer une catégorie de la liste des cat"gories
   *
   * @param {string} id
   * @memberof CategoryProvider
  */
  remove(id: string){
    for(let i = 0; i < this.listCategory.length; i++){
      if(this.listCategory[i].id === id){
        this.listCategory.splice(i,1);
        this.save();
        break;
      }
    }
  }

  /**
   *Fonction permettant d'enregistrer en base téléphone la liste des catégories
   *
   * @memberof CategoryProvider
   */
  save(){
    this.storage.set('Category', JSON.stringify(this.listCategory));
    this.update();
  }

  /**
   *Fonction permettant de supprimer en base téléphone la liste des catégories
   *
   * @memberof CategoryProvider
   */
  clean(){
    this.storage.clear();
  }

  /**
   *Fonction retournant la liste des catégories
   *
   * @returns Promise<Array<Category>>
   * @memberof CategoryProvider
   */
  getAll(){
    return new Promise<Array<Category>>((resolve, reject) => {
      this.storage.get('Category').then(
        data => {
          let temp = JSON.parse(data) || Array<Category>(0);
          resolve(temp);
        },
        error => {
          reject(error);
        }
      )
    });
  }

  /**
   *Fonction retournant une catégorie selon son id
   *
   * @param {string} id
   * @returns Category
   * @memberof CategoryProvider
   */
  getById(id: string){
    let res: Category = null;

    for(let i = 0; i < this.listCategory.length; i++){
      if(this.listCategory[i].id === id){
        res = this.listCategory[i];
        break;
      }
    }

    return res;
  }

  /**
   *Fonction retournant une catégorie selon son titre
   *
   * @param {string} title
   * @returns Category
   * @memberof CategoryProvider
   */
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

  /**
   *  Verifie si une categorie existe deja ou non
   *
   * @param {Category} c
   * @returns {boolean}
   * @memberof CategoryProvider
   */
  alreadyExist(c: Category){
    return this.getByTitle(c.title) !== null;
  }


}
