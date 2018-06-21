import { Feed } from './../Feed/feed';
export class Bookmark{
    public id: number;
    public feed: Feed;
    public dateCreation: Date;
    static latestId: number = 0;

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    constructor(feed: Feed) {
        console.log('Bookmark');
        this.id = Bookmark.incrementId();
        this.feed = feed;
        this.dateCreation = new Date();
    }
}