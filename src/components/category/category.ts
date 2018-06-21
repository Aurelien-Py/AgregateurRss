import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Category } from '../../models/Category/category';

/**
 * Generated class for the CategoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'category',
  templateUrl: 'category.html'
})
export class CategoryComponent {

  @Input() category: Category;

  constructor() {
    console.log('Hello CategoryComponent Component');
  }

}
