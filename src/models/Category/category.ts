import { Md5 } from 'ts-md5';


export class Category{
    public id: string;
    public title: string;
    public color: string;
    public dateCreation: Date;

    constructor(title: string, color: string) {
        console.log('Category');
        this.title = title;
        this.color = color;
        this.dateCreation = new Date();
        this.id = Md5.hashStr(this.title + this.color).toString();
    }
}