import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../../models/Feed/feed';
import { BookmarkProvider } from '../../providers/bookmark/bookmark';
import { Bookmark } from '../../models/Bookmark/bookmark';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public feed: Feed;
  public nombre: number;
  public listImages = [ 'assets/imgs/Image1.jpg', 'assets/imgs/Image2.jpg','assets/imgs/Image3.jpg','assets/imgs/Image4.jpg'];
  public image: string;
  public listBookmarks = Array<Bookmark>(0);
  public status: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController, private storage: Storage, public bookmark: BookmarkProvider ) {
    this.feed = navParams.get('feed');
    this.randomImage(this.feed);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  } 

  /**
   * Ouvrir une nouvelle fenêtre avec le lien du feed
   * 
   * @param feed
   * @memberof FeedPage
   * */

  openlink(feed: Feed){
    window.open(feed.link);
  }

  /**
   * Choisit une image aléatoire dans "assets/imgs" si le feed n'en communique pas
   * 
   * @param feed
   * @memberof FeedPage
   * */

  randomImage(feed: Feed) {
    let min = 0;
    let max = 4;
    this.nombre = Math.floor((Math.random() * (max - min))+ min);
    if(!feed.thumbnail){
    this.image = this.listImages[this.nombre];
    }
    else {
      this.image =  feed.thumbnail ;
    }
  }

  /**
   * Ajouter ce feed a la liste de bookmark et affiche un message de confirmation pendant 2 sec
   * 
   * @memberof FeedPage
   * */

  saveFav(){
   this.bookmark.add(new Bookmark(this.feed));
   let toast = this.toastCtrl.create({
    message: 'Flux ajouté aux favoris',
    duration: 2000,
    position: 'top'
   
  });
  toast.present();
  }
  
  /**
   * Supprimer ce feed a la liste de bookmark et affiche un message de confirmation pendant 2 sec
   * 
   * @memberof FeedPage
   */

  supprFav(){
    this.bookmark.removeByFeed(this.feed);
    let toast = this.toastCtrl.create({
      message: 'Flux supprimé des favoris',
      duration: 2000,
      position: 'top'
     
    });
    toast.present();
  }

  testFav(){
    console.log('call');
    if (this.bookmark.alreadyExist(this.feed)){
      this.supprFav();
    } else {
      this.saveFav();
    }
  }

  alreadyExist(){
    return this.bookmark.alreadyExist(this.feed);
  }
}


