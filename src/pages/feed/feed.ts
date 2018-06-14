import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../../models/Feed/feed';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.feed = navParams.get('feed');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  

}
