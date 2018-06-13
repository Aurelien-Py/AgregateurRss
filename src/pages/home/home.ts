import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnInit {

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }

  ngAfterViewInit(){

    //this.http.get("https://www.journalduhacker.net/rss")
    /*
    this.http.get("https://www.google.fr")
    .subscribe(resp => {
     console.log(resp);
    });
    */
   this.http.get('https://rss2json.com/api.json?rss_url=https://www.journalduhacker.net/rss')
    .subscribe((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });


  }

  ngOnInit(){

  }

}
