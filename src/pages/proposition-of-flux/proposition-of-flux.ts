import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryProvider } from './../../providers/category/category';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { SiteProvider } from '../../providers/site/site';
import { Site } from '../../models/Site/site';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public siteP: SiteProvider) {
  }

  ionViewDidLoad() {
    this.siteP.load();
  }

}
