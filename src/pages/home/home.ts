import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/Feed/feed';
import { Flux } from '../../models/Flux/flux';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnInit {

  feeds: Array<Feed>;

  constructor(public navCtrl: NavController, public http: HttpClient, public flux: FluxProvider) {
    this.feeds = Array<Feed>(0);
    console.log(this.feeds);
  }

  goToFeedPage(feed: Feed){
    this.navCtrl.push(FeedPage, {'feed' : feed});
  }

  ngAfterViewInit(){
    this.flux.add(new Flux('Journal du Hacker','https://www.journalduhacker.net/rss'));
    this.flux.add(new Flux('Korben','https://korben.info/feed'));
    this.doRefresh(null);
  }

  doRefresh(refresher){
    this.feeds = Array<Feed>(0);
    this.flux.getAll().then(
      data => {
        console.log(data);
        data.forEach(element => {
          this.http.get('https://rss2json.com/api.json?rss_url=' + element.link)
          .subscribe((result) => {
              
            let res = Array<Feed>(0);
            if(result['items']){
              for( let i = 0; i < result['items'].length; i++){
                let temp = result['items'][i];
                res.push(new Feed(temp['title'],temp['link'],temp['description'],temp['pubDate'], element));
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
            
            console.log(this.feeds);
            if(refresher !== null){
              refresher.complete();
            }
    
          }, (error) => {
              console.log(error);
          });
          
        });
      },
      error => {

      }
    )    
  }

  ngOnInit(){

  }

}
