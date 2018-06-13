export class Feed{
    public id: number;
    public title: string;
    public link: string;
    public description: string;
    public dateCreation: Date;
    static latestId: number = 1;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(title: string, link: string, description: string, dateCreation: Date) {
        console.log('Feed');
        this.id = Feed.incrementId();
        this.title = name;
        this.link = link;
        this.description = description;
        this.dateCreation = dateCreation;
    }
}