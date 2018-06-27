import { Category } from './../Category/category';
import { Md5 } from 'ts-md5';

export class Flux{
    public id: string;
    public title: string;
    public link: string;
    public category: Category;
    public dateCreation: Date;

    constructor(title: string, link: string, category: Category) {
        console.log('Flux');
        this.title = title;
        this.link = link;
        this.category = category;
        this.dateCreation = new Date();
        this.id = Md5.hashStr(this.title + this.link + this.category.color).toString();
    }
}