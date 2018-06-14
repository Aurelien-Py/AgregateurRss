import { Flux } from '../Flux/flux';
export class Feed{
    public id: number;
    public title: string;
    public link: string;
    public description: string;
    public pubDate: Date;
    public flux: Flux;
    static latestId: number = 0;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(title: string, link: string, description: string, pubDate: Date, flux: Flux) {
        console.log('Feed');
        this.id = Feed.incrementId();
        this.title = title;
        this.link = link;
        this.description = description;
        this.pubDate = pubDate;
        this.flux = flux;
    }
}