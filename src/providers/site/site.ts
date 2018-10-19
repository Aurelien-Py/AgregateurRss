import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from './../../models/Site/site';

/*
  Generated class for the SiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteProvider {

  public sites = Array<Site>(0);

  constructor(public http: HttpClient) {
  }

  load(){
    this.sites = [
      { sitename: 'jeuxvideo.com', url: 'cezefz'},
      { sitename: 'lemonde', url: 'gtrgekjlnr'},

    ]
  }



}
