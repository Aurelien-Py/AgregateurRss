import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FluxProvider } from '../../providers/flux/flux';
import 'rxjs/add/operator/map';
import { Feed } from '../../models/Feed/feed';
import { Flux } from '../../models/Flux/flux';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnInit {

  feeds: Array<Feed>;

  constructor(public navCtrl: NavController, public http: HttpClient, public flux: FluxProvider) {
    this.feeds = Array<Feed>(0);
  }

  ngAfterViewInit(){
    this.flux.add(new Flux('Journal du Hacker','https://www.journalduhacker.net/rss'));
    this.flux.add(new Flux('Korben','https://korben.info/feed'));
    this.flux.add(new Flux('test','https://www.journalduhacker.net/rss'));
    this.doRefresh();
  }

  doRefresh(){
    this.flux.getAll().then(
      data => {
        console.log(data);
        data.forEach(element => {
          this.http.get('https://rss2json.com/api.json?rss_url=' + element.link)
          .subscribe((result) => {
              
            console.log(result);
    
    
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
