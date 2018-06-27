import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from './../../models/Bookmark/bookmark';
import { BookmarkProvider } from '../../providers/bookmark/bookmark';
import { Feed } from '../../models/Feed/feed';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the BookmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {

  public listBookmarks = Array<Bookmark>(0);
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewC: ViewController, public http: HttpClient, public bookmark: BookmarkProvider) {
    
    this.bookmark.getAll().then(
      data => {
        this.listBookmarks = data;
      },
      error => {
        console.log("Error while loading bookmarks");
      }
    )
    
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');
  }

  /**
   * Permet d'afficher la la page Feed avec image, titre, description, date et un accès au lien du site
   * 
   * @param feed 
   * @memberof BookmarksPage
   */

  goToFeedPage(feed: Feed){
    this.navCtrl.push(FeedPage, {'feed' : feed});
  }

  ngAfterViewInit(){
    this.doRefresh(null);
  }

  /**
   * Fonction permettant de recharger la page
   * 
   * @param refresher
   * @memberof BookmarksPage
   */


  doRefresh(refresher){
    this.listBookmarks = Array<Bookmark>(0);
    this.bookmark.getAll().then(
      data => {
        console.log(data);
        this.listBookmarks = data;
        if(refresher !== null){
          refresher.complete();
        }
      },
      error => {

      }
    )    
  }
}
