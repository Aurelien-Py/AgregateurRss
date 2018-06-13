import { Component } from '@angular/core';

/**
 * Generated class for the FeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'feed',
  templateUrl: 'feed.html'
})
export class FeedComponent {

  datePub: Date;
  category: string;
  title: string;
  flux: string;

  constructor() {
    console.log('Hello FeedComponent Component');
    this.datePub = new Date();
    this.category = "#FF0000";
    this.title = "test";
    this.flux = "Test";
  }

}
