import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Site } from '../../models/Site/site';

/**
 * Generated class for the SiteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'site',
  templateUrl: 'site.html'
})
export class SiteComponent {
  @Input() site: Site;


  constructor() {
    console.log('Hello SiteComponent Component');
  }

}
