import { CategoryProvider } from './../../providers/category/category';
import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/Feed/feed';
import { Flux } from '../../models/Flux/flux';
import { FeedPage } from '../feed/feed';
import { Category } from '../../models/Category/category';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnInit {

  feeds: Array<Feed>;
  loading: boolean;
  subscription: Subscription;

  constructor(public navCtrl: NavController, public http: HttpClient, public flux: FluxProvider, private modal: ModalController, public category: CategoryProvider) {
    this.feeds = Array<Feed>(0);
    console.log(this.feeds);

    this.subscription = this.flux.getListFlux().subscribe( data => {
      this.doRefresh(null);
    });

  }

  /**
   *Fonction permettant d'accéder à la page du feed sélectionné
   *
   * @param {Feed} feed
   * @memberof HomePage
   */
  goToFeedPage(feed: Feed){
    this.navCtrl.push(FeedPage, {'feed' : feed});
  }

  /**
   *Fonction créant des catégories et des flux au lancement de l'application 
   *Utilisation uniquement dans le cadre du développement
   *
   * @memberof HomePage
   */
  ngAfterViewInit(){
    this.category.add(new Category('Informatique','123456'));
    this.category.add(new Category("Cuisine", "CACACA"))

    let tempCatg = this.category.getByTitle('Informatique');
    let tempCatgCuisine = this.category.getByTitle('Cuisine');

    this.flux.add(new Flux('Journal du Hacker','https://www.journalduhacker.net/rss', tempCatg));
    this.flux.add(new Flux('Korben','https://korben.info/feed', tempCatg));
    this.flux.add(new Flux("Marmiton", "http://www.marmiton.org/rss/contenus-groupe.aspx", tempCatgCuisine));

    this.loading = true;
    
    this.doRefresh(null);
  }

  /**
   *Fonction permettant de recharger la page
   *
   * @param {*} refresher
   * @memberof HomePage
   */
  doRefresh(refresher){
    this.feeds = Array<Feed>(0);
    this.flux.getAll().then(
      data => {
        console.log(data);
        if(data !== null){
          data.forEach(element => {
            this.http.get('https://rss2json.com/api.json?rss_url=' + element.link)
            .subscribe((result) => {
                
              let res = Array<Feed>(0);
              if(result['items']){
                for( let i = 0; i < result['items'].length; i++){
                  let temp = result['items'][i];
                  res.push(new Feed(temp['title'],temp['link'],temp['description'],temp['pubDate'],temp['thumbnail'] ,element));
                }
              }
              this.feeds = this.feeds.concat(res);

              this.feeds.sort((b,a) => {
                let res = 0;
                let da = new Date(a.pubDate);
                let db = new Date(b.pubDate);
                if(da > db){
                  res = 1;
                }else if(da < db){
                  res = -1;
                }

                return res;
              })
              this.loading = false;
              console.log(this.feeds);
              if(refresher !== null){
                refresher.complete();
              }
      
            }, (error) => {
                console.log(error);
            });
            
          });
        }
      },
      error => {

      }
    )    
  }

  ngOnInit(){

  }

  /**
   *Fonction permettant l'ouverture d'un modal pour l'ajout d'un flux
   *
   * @memberof HomePage
   */
  openModal(){
    const modalAddFlux : Modal = this.modal.create('ModalAddingFluxPage');
    modalAddFlux.present();
  }


}
