import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Feed } from '../../models/Feed/feed';

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

  @Input() feed: Feed;

  constructor() {
    console.log('Hello FeedComponent Component');
  }

}
