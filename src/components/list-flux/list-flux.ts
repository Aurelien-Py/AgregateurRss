import { Component } from '@angular/core';

/**
 * Generated class for the ListFluxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'list-flux',
  templateUrl: 'list-flux.html'
})
export class ListFluxComponent {

  text: string;

  constructor() {
    console.log('Hello ListFluxComponent Component');
    this.text = 'Hello World';
  }

}
