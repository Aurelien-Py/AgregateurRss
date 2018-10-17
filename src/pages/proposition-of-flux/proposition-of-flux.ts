import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryProvider } from './../../providers/category/category';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FluxProvider } from '../../providers/flux/flux';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/Feed/feed';
import { FeedPage } from '../feed/feed';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../models/Category/category';
/**
 * Generated class for the PropositionOfFluxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proposition-of-flux',
  templateUrl: 'proposition-of-flux.html',
})
export class PropositionOfFluxPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropositionOfFluxPage');
  }

}
