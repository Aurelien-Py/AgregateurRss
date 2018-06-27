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

  add(b: Bookmark){
    let res: boolean = false;
    if(!this.alreadyExist(b)){
      this.listBookmark.push(b);
      this.save();
      res = true;
    }
    return res;
  }

  remove(id: number){
    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].id === id){
        this.listBookmark.splice(i,1);
        this.save();
        break;
      }
    }
  }

  save(){
    this.storage.set('Bookmark', JSON.stringify(this.listBookmark));
  }

  clean(){
    this.storage.clear();
  }

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

  getById(id: number){
    let res: Bookmark = null;

    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].id === id){
        res = this.listBookmark[i];
        break;
      }
    }

    return res;
  }

  getByFeed(f: Feed){
    let res: Bookmark = null;

    for(let i = 0; i < this.listBookmark.length; i++){
      if(this.listBookmark[i].feed === f){
        res = this.listBookmark[i];
        break;
      }
    }

    return res;
  }

  alreadyExist(b: Bookmark){
    return this.getByFeed(b.feed) !== null;
  }

}
