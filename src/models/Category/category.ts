export class Category{
    public id: number;
    public title: string;
    public color: string;
    public dateCreation: Date;
    static latestId: number = 0;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(title: string, color: string) {
        console.log('Category');
        this.id = Category.incrementId();
        this.title = title;
        this.color = color;
        this.dateCreation = new Date();
    }
}