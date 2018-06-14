import { Component } from '@angular/core';
import { Input } from '@angular/core';

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

  @Input() datePub: Date;
  @Input() category: string;
  @Input() title: string;
  @Input() flux: string;

  constructor() {
    console.log('Hello FeedComponent Component');
    this.datePub = new Date();
    this.category = "#FF0000";
    this.title = "Titre de l'article très très très très très très très long de chez long de chez long de très très très très très très très long de chez long très très très très très très très long de chez long";
    this.flux = "Site origine du flux";
  }

}
