import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Category } from '../../models/Category/category';
import { ModalController, Modal  } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';

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

  constructor(private categoryP : CategoryProvider, private modal: ModalController) {
    console.log('Hello CategoryComponent Component');
  }
/**
 *Fonction servant à supprimer une catégorie 
 *
 * @param {number} id
 * @memberof CategoryComponent
 */

remove(id: string){
    this.categoryP.remove(id);
  }
/**
 *Fonction servant à ouvrir un modal pour la modification d'une nouvelle catégorie
 *
 * @memberof CategoryComponent
 */
openModal(){
  const modalAddFlux : Modal = this.modal.create('ModalModifyCategoryPage',{'category' : this.category});
    modalAddFlux.present();
  }


}
