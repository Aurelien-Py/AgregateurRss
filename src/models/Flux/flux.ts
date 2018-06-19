import { Category } from './../Category/category';
export class Flux{
    public id: number;
    public title: string;
    public link: string;
    public category: Category;
    public dateCreation: Date;
    static latestId: number = 0;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(title: string, link: string, category: Category) {
        console.log('Flux');
        this.id = Flux.incrementId();
        this.title = title;
        this.link = link;
        this.category = category;
        this.dateCreation = new Date();
    }
}