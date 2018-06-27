import { Feed } from './../../models/Feed/feed';
import { Bookmark } from './../../models/Bookmark/bookmark';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the BookmarkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookmarkProvider {

  public listBookmark = Array<Bookmark>(0);

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello BookmarkProvider Provider');
    this.storage.get('Bookmark').then(
      data => {
        console.log(data);
        this.listBookmark = JSON.parse(data) || Array<Bookmark>(0);
      },
      error => {
        console.log('Erreur Bookmark Constructor');
      }
    );
  }

  /**
   *Fonction permettant d'ajouter un article à la liste des favoris
   *
   * @param {Bookmark} b
   * @memberof BookmarkProvider
   */
  add(b: Bookmark){
    let res: boolean = false;
    if(!this.alreadyExist(b.feed)){
      this.listBookmark.push(b);
      this.save();
      res = true;
    }
    return res;
  }

  /**
   *Fonction permettant de retirer un article de la liste des favoris a l'aide d'un id d'un bookmark
   *
   * @param {string} id Bookmark
   * @return {Bookmark} le bookmark supprime
   * @memberof BookmarkProvider
   */
  removeById(id: string){
    let res: Bookmark = null;
    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].id === id){
        res = this.listBookmark.splice(i,1)[0];
        this.save();
        break;
      }
    }

    return res;
  }

    /**
   *Fonction permettant de retirer un article de la liste des favoris a l'aide d'un feed
   *
   * @param {number} id
   * @return {Bookmark} le bookmark supprime
   * @memberof BookmarkProvider
   */
  removeByFeed(feed: Feed){
    let res: Bookmark = null;
    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].feed.id === feed.id){
        res = this.listBookmark.splice(i,1)[0];
        this.save();
        break;
      }
    }

    return res;
  }

  /**
   *Fonction permettant d'enregistrer en base mémoire téléphone la liste des favoris
   *
   * @memberof BookmarkProvider
   */
  save(){
    this.storage.set('Bookmark', JSON.stringify(this.listBookmark));
  }

  /**
   *Fonction permettant d'effacer de la base mémoire téléphone la liste des favoris
   *
   * @memberof BookmarkProvider
   */
  clean(){
    this.storage.clear();
  }

  /**
   *Fontion retournant la liste des favoris
   *
   * @returns Promise<Array<Bookmark>>
   * @memberof BookmarkProvider
   */
  getAll(){
    return new Promise<Array<Bookmark>>((resolve, reject) => {
      this.storage.get('Bookmark').then(
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
   *Fonction retournant un article favori selon son id
   *
   * @param {string} id
   * @returns Bookmark
   * @memberof BookmarkProvider
   */
  getById(id: string){
    let res: Bookmark = null;

    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].id === id){
        res = this.listBookmark[i];
        break;
      }
    }

    return res;
  }

  /**
   *Fonction retournant un article favori selon selon son Feed
   *
   * @param {Feed} f
   * @returns {Bookmark}
   * @memberof BookmarkProvider
   */
  getByFeed(f: Feed){
    let res: Bookmark = null;
    console.log(this.listBookmark);

    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].feed.id === f.id){
        res = this.listBookmark[i];
        break;
      }
    }

    return res;
  }

  alreadyExist(f: Feed){
    return this.getByFeed(f) !== null;
  }

}
